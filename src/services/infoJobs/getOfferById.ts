import { GetOfferByIdApiResponse } from '../../types';
import { NO_RECORDS_CODE } from '../../constants';
import { ApiError } from '@services/errors/ApiError';
import { GetOfferByIdResponse } from './types';
import { ServiceEnum } from '@services/serivices.enum';

const BASE_URL = 'https://api.infojobs.net';
const INFOJOBS_TOKEN = process.env.INFOJOBS_TOKEN ?? '';

export const getOfferById = async (
  offerId: string
): Promise<GetOfferByIdApiResponse> => {
  const response = await fetch(`${BASE_URL}/api/9/offer/${offerId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`,
    },
  });

  const data = await response.json();
  if (!response.ok && data.error === NO_RECORDS_CODE) {
    throw new ApiError(ServiceEnum.INFOJOBS, data.error_description, 404);
  }

  if (!response.ok) {
    throw new ApiError(ServiceEnum.INFOJOBS, 'Infojobs api error unknown', 500);
  }

  const {
    id,
    title,
    profile,
    description,
    teleworking,
    city,
    province,
    country,
    salaryDescription,
    experienceMin,
    contractType,
    journey,
    creationDate,
    studiesMin,
    languages,
    skillsList,
    minRequirements,
    desiredRequirements,
    category,
    contractDuration,
    link,
  } = data as GetOfferByIdResponse;
  const {
    name: authorName,
    logoUrl,
    corporateWebsiteUrl,
    typeIndustry,
  } = profile;

  return {
    id,
    title,
    logoUrl,
    description,
    authorName,
    teleworking: teleworking.value,
    city,
    province: province.value,
    salaryDescription,
    experienceMin: experienceMin.value,
    contractType: contractType.value,
    journey: journey.value,
    creationDate,
    corporateWebsiteUrl,
    country: country.value,
    studiesMin: studiesMin.value,
    languages: languages?.map((item) => `${item.name} - ${item.level}`) || [],
    skillsList: skillsList.map(({ skill }) => skill) || [],
    minRequirements,
    desiredRequirements,
    typeIndustry: typeIndustry.value,
    category: category.value,
    contractDuration,
    infojobsLink: link,
  };
};
