'use client';
import { SecondaryLayout } from '@components/ui/layouts/SecondaryLayout/SecondaryLayout';
import React from 'react';
import { GetOfferByIdApiResponse } from '../../../types';
import Link from 'next/link';
import { Button } from '@components/ui/button/Button';
import { accentButtonStyle } from '@components/ui/button/styles';
import { formatTimestamp } from '@utils/formatTimestamp';
import { Badge, Divider } from '@tremor/react';
import { useRouter } from 'next/navigation';

type Props = GetOfferByIdApiResponse;

export const OfferTemplate: React.FC<Props> = ({
  id,
  title,
  authorName,
  corporateWebsiteUrl,
  description,
  logoUrl,
  city,
  province,
  country,
  teleworking,
  salaryDescription,
  experienceMin,
  contractType,
  journey,
  creationDate,
  skillsList,
  languages,
  studiesMin,
  minRequirements,
  desiredRequirements,
  typeIndustry,
  category,
  contractDuration,
}) => {
  const router = useRouter();
  return (
    <SecondaryLayout>
      <section className="rounded shadow-lg mb-10">
        <div className="px-6 py-4 flex items-center gap-x-5">
          <div className="min-w-[78px] min-h-[78px]">
            <img
              className="w-20 h-20"
              src={logoUrl}
              width={78}
              height={78}
              alt="author logo"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <Link
              className="font-medium text-sm hover:underline text-primary hover:text-primary-d4 "
              href={corporateWebsiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {authorName}
            </Link>
          </div>
        </div>
        <div className="px-6 py-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <ul className="list-disc marker:text-gray-l1 ml-5">
            <li>
              <span className="text-sm">
                {city}, {province}, {country}
              </span>
            </li>
            <li>
              <span className="text-sm">
                <strong>{teleworking}</strong>
              </span>
            </li>
            <li>
              <span className="text-sm">
                Publicada:{' '}
                <strong className="text-lime-700">
                  {formatTimestamp(creationDate, 'medium')}
                </strong>
              </span>
            </li>
            <li>
              <span className="text-sm">
                Salario: <strong>{salaryDescription}</strong>
              </span>
            </li>
          </ul>
          <ul className="list-disc marker:text-gray-l1 ml-5">
            <li>
              <span className="text-sm">
                Experiencia mínima: <strong>{experienceMin}</strong>
              </span>
            </li>
            <li>
              <span className="text-sm">
                Tipo de contrato:{' '}
                <strong>
                  {contractType}, {journey}
                </strong>
              </span>
            </li>
          </ul>

          <div>
            <Button
              type="button"
              className={accentButtonStyle}
              onClick={() => {
                router.push(`/offers/${id}/application`);
              }}
            >
              Inscribirme en esta oferta
            </Button>
          </div>
        </div>
      </section>
      <section className="rounded shadow-lg px-6 py-4">
        <div>
          <h2 className="font-semibold text-2xl mb-4">Requisitos</h2>
          <ul>
            {studiesMin && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">Estudios mínimos</h3>
                <span>{studiesMin}</span>
              </li>
            )}
            {languages.length > 0 && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">Idiomas requeridos</h3>
                <ul className="flex gap-2 flex-wrap">
                  {languages.map((language) => (
                    <li key={language}>
                      <span>{language}</span>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {skillsList.length > 0 && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">
                  Conocimientos necesarios
                </h3>
                <ul className="flex gap-2 flex-wrap">
                  {skillsList.map((skill) => (
                    <li key={skill}>
                      <Badge className="text-black">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {minRequirements && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">Requisitos mínimos</h3>
                <p className="whitespace-pre-wrap">{minRequirements}</p>
              </li>
            )}
            {desiredRequirements && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">Requisitos deseados</h3>
                <p className="whitespace-pre-wrap">{desiredRequirements}</p>
              </li>
            )}
          </ul>
        </div>
        <Divider />
        <div>
          <h2 className="font-semibold text-2xl mb-4">Descripción</h2>
          <p className="whitespace-pre-wrap mb-4">{description}</p>
          <ul>
            <li className="mb-2">
              <h3 className="text-base font-semibold">
                Identificador de la oferta
              </h3>
              <span>{id}</span>
            </li>
            {typeIndustry && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">
                  Tipo de industria de la oferta
                </h3>
                <span>{typeIndustry}</span>
              </li>
            )}
            {category && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">Categoría</h3>
                <span>{category}</span>
              </li>
            )}
            {contractDuration && (
              <li className="mb-2">
                <h3 className="text-base font-semibold">
                  Duración del contrato
                </h3>
                <span>{contractDuration}</span>
              </li>
            )}
          </ul>
        </div>
      </section>
    </SecondaryLayout>
  );
};
