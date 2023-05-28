import { Button } from '@components/ui/button/Button';
import React, { useState } from 'react';
import { primaryButtonStyle } from '@components/ui/button/styles';
import { getOfferRequest } from '@services/website/getOfferRequest';
import { Spinner } from '@components/ui/spinner/Spinner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validateFileList } from '@utils/validateFileList';
import useMedia from '@components/ui/hooks/useMedia';
import Link from 'next/link';
import { getTextFromPdf } from '@utils/getTextFromPdf';
import { getInfoEvaluatorRequest } from '@services/website/getInfoEvaluatorRequest';
import { InputFile } from './InputFile';
import { EvaluationResult } from '../EvaluationResult/EvaluationResult';
import {
  EvaluationState,
  EvaluationForRecruiter,
  InfoEvaluatorForRecruitersForm,
  InputFiles,
} from '../../../types';

export const DescriptionForm = () => {
  const isBelowMd = useMedia('belowMd');
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
    reset,
  } = useForm<InfoEvaluatorForRecruitersForm>({
    defaultValues: {
      checkboxAddingDescription: true,
      checkboxGettingDescription: false,
    },
  });
  const offerDescription = watch('description');
  const checkboxAddingDescription = watch('checkboxAddingDescription');
  const checkboxGettingDescription = watch('checkboxGettingDescription');
  const selectedFile1 = watch('fileInput1');
  const selectedFile2 = watch('fileInput2');
  const selectedFile3 = watch('fileInput3');
  const selectedFile4 = watch('fileInput4');

  const [evaluations, setEvaluations] = useState<EvaluationForRecruiter[]>([]);
  const [fileEvaluationState, setFileEvaluationState] = useState<
    EvaluationState[]
  >([]);
  const [isSearchOfferLoading, setIsSearchOfferLoading] = useState(false);
  const [buttonSubmitted, setButtonSubmitted] = useState<InputFiles | null>(
    null
  );
  const [isFirstPartConfirmed, setIsFirstPartConfirmed] = useState(false);

  const handleConfirmFirstPartChange = () => setIsFirstPartConfirmed(true);

  const handleCheckboxChange = (
    name: 'checkboxAddingDescription' | 'checkboxGettingDescription',
    checked: boolean
  ) => {
    setValue(name, checked);
    setValue(
      name === 'checkboxAddingDescription'
        ? 'checkboxGettingDescription'
        : 'checkboxAddingDescription',
      !checked
    );
  };

  const handleGetDescription = async () => {
    clearErrors('offerId');
    const offerId = getValues('offerId');
    if (offerId == null || offerId === '') {
      return setError('offerId', {
        message: 'El id de la oferta debe ser válido',
      });
    }
    setIsSearchOfferLoading(true);
    try {
      const { description } = await getOfferRequest(offerId);
      setValue('description', description);
      clearErrors('description');
    } catch (err) {
      const error = err as Error;
      setError('offerId', { message: error.message });
    } finally {
      setIsSearchOfferLoading(false);
    }
  };

  const resetForm = () => {
    clearErrors();
    setIsSearchOfferLoading(false);
    setIsFirstPartConfirmed(false);
    setEvaluations([]);
    setFileEvaluationState([]);
    reset();

    // Manually update the disabled and checked states
    handleCheckboxChange('checkboxAddingDescription', true);
    getValues(); // Trigger re-render
  };

  const onSubmit: SubmitHandler<InfoEvaluatorForRecruitersForm> = async (
    data,
    event
  ) => {
    const buttonName = (event?.nativeEvent as any)?.submitter
      ?.name as InputFiles;
    if (!buttonName) return;

    setButtonSubmitted(buttonName);
    const { description } = data;
    const fileList = data[buttonName];
    const file = fileList?.[0];
    if (!file) return;

    const fileName = file.name;

    if (fileEvaluationState.find((item) => item.fileName === fileName)) {
      return setFileEvaluationState((prev) => [
        ...prev,
        {
          fileName,
          inputFile: buttonName,
          state: 'error',
          error: 'No puede haber hojas de vida con el mismo nombre',
        },
      ]);
    }

    const validation = await validateFileList(fileList);
    if (validation !== true) {
      setError(buttonName, {
        message: validation,
      });
      setButtonSubmitted(null);
      return;
    }

    let cvTextContent: string;
    try {
      cvTextContent = await getTextFromPdf(file);
      if (cvTextContent === '') throw new Error();
    } catch (error) {
      console.log({ error });
      setError(buttonName, {
        message: 'Error al procesar el documento. Intenta con otro PDF',
      });
      return;
    }

    try {
      const data = await getInfoEvaluatorRequest({
        description,
        cv: cvTextContent,
      });
      setEvaluations((prev) => {
        return [
          ...prev,
          {
            fileName,
            percentage: data.percentage * 100,
            review: data.explanation,
          },
        ].sort((a, b) => b.percentage - a.percentage);
      });
      setFileEvaluationState((prev) => [
        ...prev,
        { fileName, inputFile: buttonName, state: 'success' },
      ]);
    } catch (err) {
      const error = err as Error;
      setFileEvaluationState((prev) => [
        ...prev,
        {
          fileName,
          inputFile: buttonName,
          state: 'error',
          error:
            error.message ||
            'Hubo un error en el servidor. Intenta más tarde o contacte con los administradores del sitio',
        },
      ]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold text-primary mt-16">
        ¡Prueba nuestro evaluador de Hojas de vida!
      </h1>
      <div id="first-part-description" className="flex flex-col mb-10">
        <h2 className="my-5 text-lg">
          <strong>1.</strong> Seleccioné de donde desea obtener la descripción
          de la oferta de trabajo:
        </h2>
        <div
          id="first-part-description-selection"
          className="flex flex-col md:flex-row gap-x-20"
        >
          <div>
            <div className="flex items-center mb-4">
              <label className="flex items-center">
                <input
                  {...register('checkboxAddingDescription')}
                  disabled={isFirstPartConfirmed}
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  checked={checkboxAddingDescription}
                  name="checkboxAddingDescription"
                  onChange={(e) =>
                    handleCheckboxChange(
                      e.target.name as 'checkboxAddingDescription',
                      e.target.checked
                    )
                  }
                />
                <span className="ml-2 text-sm font-medium text-gray-900">
                  Añadir descripción
                </span>
              </label>
            </div>
            <div className="flex items-center mb-4">
              <label className="flex items-center">
                <input
                  {...register('checkboxGettingDescription')}
                  disabled={isFirstPartConfirmed}
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  checked={checkboxGettingDescription}
                  name="checkboxGettingDescription"
                  onChange={(e) =>
                    handleCheckboxChange(
                      e.target.name as 'checkboxGettingDescription',
                      e.target.checked
                    )
                  }
                />
                <span className="ml-2 text-sm font-medium text-gray-900">
                  Obtener descripción de una oferta de Infojobs
                </span>
              </label>
            </div>
          </div>
          {checkboxGettingDescription && (
            <div>
              <label
                htmlFor="offer-id"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Id de la oferta
              </label>
              <div className="flex flex-col md:flex-row gap-5">
                <div>
                  <input
                    {...register('offerId', { required: false })}
                    type="text"
                    id="offer-id"
                    className="m-full md:w-72 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="123abc"
                    required
                    disabled={isSearchOfferLoading || isFirstPartConfirmed}
                  />
                  {isBelowMd && errors.offerId && (
                    <span className="text-error font-bold text-sm">
                      {errors.offerId.message ?? 'unknown offerId error'}
                    </span>
                  )}
                </div>
                <Button
                  disabled={
                    isSearchOfferLoading || isSubmitting || isFirstPartConfirmed
                  }
                  type="button"
                  className={primaryButtonStyle}
                  onClick={handleGetDescription}
                >
                  <span className="flex justify-center w-full">
                    {isSearchOfferLoading ? <Spinner /> : 'Buscar'}
                  </span>
                </Button>
              </div>
              {!isBelowMd && errors.offerId && (
                <span className="block text-error font-bold text-sm">
                  {errors.offerId.message ?? 'unknown offerId error'}
                </span>
              )}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="add-description-text"
            className="text-sm font-medium text-gray-900 "
          >
            Descripción de la oferta
          </label>
          <textarea
            id="add-description-text"
            disabled={checkboxGettingDescription || isFirstPartConfirmed}
            rows={10}
            maxLength={750}
            className="disabled:cursor-not-allowed block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-75"
            placeholder={
              checkboxAddingDescription
                ? 'Escribe la oferta de trabajo aquí...'
                : 'Descripción de la oferta'
            }
            {...register('description', {
              required: 'La descripción de la oferta es obligatoria',
            })}
          />
          {errors.description && (
            <span className="text-error font-bold text-sm">
              {errors.description.message?.toString() ??
                'unknown description error'}
            </span>
          )}
        </div>
      </div>

      {!isFirstPartConfirmed && (
        <div>
          <h2>
            Al darle click en <strong>Cargar hojas de vida</strong>, todo el
            procesamiento de la información se hará con la descripción de la
            oferta de trabajo anterior. ¡No te preocupes, en cualquier momento
            puedes reiniciar la evaluación!
          </h2>
          <div className="my-5 flex justify-center">
            <Button
              disabled={isSearchOfferLoading || !offerDescription}
              type="button"
              className={primaryButtonStyle}
              onClick={handleConfirmFirstPartChange}
            >
              <span className="block w-50">Cargar hojas de vida</span>
            </Button>
          </div>
        </div>
      )}

      {isFirstPartConfirmed && (
        <>
          <div id="second-part-file-selection" className="mb-20">
            <h2 className="mb-4 text-lg">
              <strong>2.</strong> Seleccioné las hojas de vida que quiera
              revisar dandole click al botón <strong>Cargar archivo</strong>.
              Esta funcionalidad solo permite cargar hasta un máximo de 4 hojas
              de vida, en formato <strong>PDF(.pdf)</strong> y cuyo{' '}
              <strong>tamaño sea inferior a 1MB</strong>. El PDF solamente puede
              tene <strong>una(1) hoja</strong>.
            </h2>
            <div className="my-6">
              <p className="text-sm mb-2">
                Te facilitamos el trabajo! Te dejamos 3 hojas de vida fictias, a
                manera de ejemplo, para que puedas probrar la funcionalidad.
              </p>
              <ul className="flex flex-col md:flex-row gap-x-10 gap-y-1">
                <li>
                  <Link
                    href="https://drive.google.com/file/d/1NbJtvjAfYoQavNX4hyZF43MkxIOcHyzt/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sm hover:underline text-primary hover:text-primary-d4 "
                  >
                    backend_fake_cv.pdf
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drive.google.com/file/d/1XwNrNB8fRZAVnYxh8YavnLvi_gc67HhO/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sm hover:underline text-primary hover:text-primary-d4"
                  >
                    frontend_fake_cv.pdf
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drive.google.com/file/d/1zEnt6_nYXRzsXJEHTXPYDbqjMMhCK7Qw/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sm hover:underline text-primary hover:text-primary-d4"
                  >
                    cajera_fake_cv.pdf
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drive.google.com/file/d/17lAhX_YS5lleyt4WOZn485rKq70C4TlE/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sm hover:underline text-primary hover:text-primary-d4"
                  >
                    asesor_ventas_fake_cv.pdf
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <ul className="py-10 w-full flex flex-col gap-y-5">
                <li>
                  <InputFile
                    inputFileId="file-input-1"
                    inputFileName="fileInput1"
                    inputFileListValue={selectedFile1}
                    isFormSubmitting={isSubmitting}
                    isButtonSubmitting={
                      isSubmitting && buttonSubmitted === 'fileInput1'
                    }
                    evaluationState={fileEvaluationState.find(
                      (item) => item.inputFile === 'fileInput1'
                    )}
                    error={errors.fileInput1}
                    register={() => register('fileInput1')}
                  />
                </li>
                <li>
                  <InputFile
                    inputFileId="file-input-2"
                    inputFileName="fileInput2"
                    inputFileListValue={selectedFile2}
                    isFormSubmitting={isSubmitting}
                    isButtonSubmitting={
                      isSubmitting && buttonSubmitted === 'fileInput2'
                    }
                    evaluationState={fileEvaluationState.find(
                      (item) => item.inputFile === 'fileInput2'
                    )}
                    error={errors.fileInput2}
                    register={() => register('fileInput2')}
                  />
                </li>
                <li>
                  <InputFile
                    inputFileId="file-input-3"
                    inputFileName="fileInput3"
                    inputFileListValue={selectedFile3}
                    isFormSubmitting={isSubmitting}
                    isButtonSubmitting={
                      isSubmitting && buttonSubmitted === 'fileInput3'
                    }
                    evaluationState={fileEvaluationState.find(
                      (item) => item.inputFile === 'fileInput3'
                    )}
                    error={errors.fileInput3}
                    register={() => register('fileInput3')}
                  />
                </li>
                <li>
                  <InputFile
                    inputFileId="file-input-4"
                    inputFileName="fileInput4"
                    inputFileListValue={selectedFile4}
                    isFormSubmitting={isSubmitting}
                    isButtonSubmitting={
                      isSubmitting && buttonSubmitted === 'fileInput4'
                    }
                    evaluationState={fileEvaluationState.find(
                      (item) => item.inputFile === 'fileInput4'
                    )}
                    error={errors.fileInput4}
                    register={() => register('fileInput4')}
                  />
                </li>
              </ul>
            </div>
          </div>

          {evaluations.length > 0 && (
            <EvaluationResult evaluations={evaluations} />
          )}

          <div className="my-10 flex flex-col md:flex-row justify-center">
            <button
              disabled={isSubmitting}
              type="button"
              onClick={resetForm}
              className={primaryButtonStyle}
            >
              Reiniciar Evaluación
            </button>
          </div>
        </>
      )}
    </form>
  );
};
