'use client';
import { SecondaryLayout } from '@components/ui/layouts/SecondaryLayout/SecondaryLayout';
import React, { ChangeEvent, useRef, useState } from 'react';
import { GetOfferByIdApiResponse } from '../../../types';
import Image from 'next/image';
import {
  accentButtonStyle,
  primaryButtonInvertedStyle,
  primaryButtonStyle,
} from '@components/ui/button/styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MAX_FILE_SIZE_1MB } from '../../../constants';
import { Spinner } from '@components/ui/spinner/Spinner';
import { getRecommendationRequest } from '@services/website/getRecommendationRequest';
import { Card } from '@tremor/react';
import { getTextFromPdf } from '@utils/getTextFromPdf';
import Link from 'next/link';
import { SuggestedQuestions } from '@components/infohacks/SuggestedQuestions';

type Props = GetOfferByIdApiResponse;

interface InfoHackForm {
  resume?: string;
  fileInput?: File;
  serverError?: string;
}

export const ApplicationTemplate: React.FC<Props> = ({
  description,
  infojobsLink,
  skillsList,
  languages,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [wayToUploadResume, setWayToUploadResume] = useState<
    null | 'pdf' | 'text'
  >(null);
  const [isLoading, setIsLoading] = useState({
    recommendation: false,
    suggestedQuestions: false,
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm<InfoHackForm>();

  const selectedFile = watch('fileInput');

  const onSubmit: SubmitHandler<InfoHackForm> = async (data) => {
    setRecommendations([]);
    clearErrors();
    setIsLoading((prev) => ({ ...prev, recommendation: true }));
    let cvContent;
    if (wayToUploadResume === 'pdf' && selectedFile) {
      try {
        cvContent = await getTextFromPdf(selectedFile);
        if (cvContent === '') throw new Error();
      } catch (error) {
        return setError('fileInput', {
          message: 'Error al procesar el documento. Intenta con otro PDF',
        });
      }
    } else {
      cvContent = data.resume ?? '';
    }

    try {
      const response = await getRecommendationRequest({
        description,
        cv: cvContent,
      });
      setRecommendations(response.recommendations);
    } catch (error) {
      setError('serverError', {
        message: (error as Error)?.message || 'Server error',
      });
    } finally {
      setIsLoading((prev) => ({ ...prev, recommendation: false }));
    }
  };

  const toggleUploadResume = (way: 'text' | 'pdf') => {
    setValue('fileInput', undefined);
    reset();
    setWayToUploadResume(way);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile.size > MAX_FILE_SIZE_1MB) {
        return setError('fileInput', { message: 'El archivo pesa más de 1mb' });
      }

      if (selectedFile.type !== 'application/pdf') {
        return setError('fileInput', {
          message: 'Tipo de archivo inválido. Solo se aceptan PDF',
        });
      }
      setValue('fileInput', selectedFile);
      // Reset the value of the file input
      event.target.value = '';
    }
  };

  return (
    <SecondaryLayout>
      <section>
        <div className="flex flex-col md:flex-row items-center gap-x-5 mb-10 xl:mb-1">
          <Image
            className="max-w-xs w-full"
            src="/assets/upload-cv.svg"
            width={50}
            height={50}
            alt="upload-cv"
          />
          <div>
            <h1 className="text-3xl font-bold my-4">
              ¿Vas a postularte a una oferta laboral?
            </h1>
            <p className="text-xl leading-8">
              ¡Antes de que te postules, queremos ayudarte a destacar! Carga tu
              hoja de vida en formato PDF o simplemente ingresa el contenido de
              tu CV en texto. Con base en la oferta de trabajo, te
              proporcionaremos recomendaciones personalizadas que podrán
              potenciar tu perfil.{' '}
              <strong>
                ¡Prepárate para resaltar y destacar entre los demás candidatos!
              </strong>
            </p>
            <div className="py-5 flex flex-col xs:flex-row justify-center md:justify-end gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                id="pdf-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                disabled={
                  isLoading.recommendation || isLoading.suggestedQuestions
                }
                className={primaryButtonStyle}
                onClick={() => {
                  toggleUploadResume('pdf');
                  if (fileInputRef.current) {
                    fileInputRef.current.click();
                  }
                }}
              >
                Cargar hoja de vida en PDF
              </button>
              <button
                disabled={
                  isLoading.recommendation || isLoading.suggestedQuestions
                }
                className={primaryButtonStyle}
                onClick={() => toggleUploadResume('text')}
              >
                Cargar hoja de vida en texto
              </button>
            </div>
          </div>
        </div>
      </section>
      {wayToUploadResume === 'text' && (
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="add-resume-text"
              className="text-sm font-medium text-gray-900 "
            >
              Copia y pega el contenido de tu hoja de vida (Máximo 2000
              carácteres)
            </label>
            <textarea
              id="add-resume-text"
              className=" disabled:cursor-not-allowed block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-75"
              maxLength={3000}
              rows={10}
              placeholder="Desarrollador frontend con más de ..."
              {...register('resume', {
                required: 'El campo es obligatorio',
                maxLength: 3000,
              })}
            />
            {errors.resume && (
              <span className="text-error font-bold text-sm">
                {errors.resume.message?.toString() ?? 'unknown'}
              </span>
            )}
            <div className="my-4 flex justify-center items-center">
              <button
                type="submit"
                disabled={
                  isLoading.recommendation || isLoading.suggestedQuestions
                }
                className={primaryButtonInvertedStyle + ' min-w-[300px]'}
              >
                <span>
                  {isLoading.recommendation ? (
                    <Spinner />
                  ) : (
                    'Procesar Información'
                  )}
                </span>
              </button>
            </div>
          </form>
        </section>
      )}
      {wayToUploadResume === 'pdf' && selectedFile && (
        <section>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/cvIcon.png"
              width={20}
              height={20}
              alt="document"
            />
            <span className="ml-2 text-sm font-medium text-primary">
              {selectedFile.name}
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4 flex justify-center items-center">
              <button
                type="submit"
                disabled={
                  isLoading.recommendation || isLoading.suggestedQuestions
                }
                className={primaryButtonInvertedStyle + ' min-w-[300px]'}
              >
                <span>
                  {isLoading.recommendation ? (
                    <Spinner />
                  ) : (
                    'Procesar Información'
                  )}
                </span>
              </button>
            </div>
          </form>
        </section>
      )}
      {errors.fileInput && (
        <span className="text-error font-bold text-sm">
          {errors.fileInput.message?.toString() ?? 'unknown'}
        </span>
      )}
      {errors.serverError && (
        <span className="text-error font-bold text-sm">
          {errors.serverError.message?.toString() ?? 'unknown'}
        </span>
      )}
      {recommendations.length > 0 && (
        <section>
          <h2 className="text-lg font-bold py-4">Recomendaciones</h2>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
            {recommendations.map((item) => (
              <li key={item}>
                <Card className="flex h-full">
                  <p className="whitespace-pre-wrap text-small text-gray-d1">
                    {item}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}
      <SuggestedQuestions
        isFormLoading={isLoading}
        setFormLoading={setIsLoading}
        description={description}
        languages={languages}
        skillsList={skillsList}
      />
      {infojobsLink && (
        <section className="flex justify-center my-5 pt-2">
          <Link
            className={accentButtonStyle}
            href={infojobsLink}
            target="_blank"
            rel="noreferrer"
          >
            Ir al sitio oficial de Infojobs para inscribirme en la oferta
            laboral
          </Link>
        </section>
      )}
    </SecondaryLayout>
  );
};
