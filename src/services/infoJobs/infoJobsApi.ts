import { GetOffersApiResponse } from 'types';
import { GetOfferProps, GetOffersResponse } from './types';
import { ITEMS_PER_PAGE } from '../../constants';

const BASE_URL = 'https://api.infojobs.net';
const INFOJOBS_TOKEN = process.env.INFOJOBS_TOKEN ?? '';

const DEFAULT_PAGE = 1;

export const getOffers = async (
  props: GetOfferProps
): Promise<GetOffersApiResponse> => {
  const page = (props.page ?? DEFAULT_PAGE).toString();
  const limit = props.maxResults ?? ITEMS_PER_PAGE;

  const paramsObj: Record<string, string | string> = {
    maxResults: limit.toString(),
    page,
    q: props.q ?? '',
  };
  const urlParams = new URLSearchParams(paramsObj);

  const res = await fetch(`${BASE_URL}/api/9/offer?${urlParams.toString()}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`,
    },
  });

  const response = (await res.json()) as GetOffersResponse;
  const { items, currentPage, pageSize, totalResults, totalPages } = response;

  const offers = items.map((item) => {
    const {
      id,
      title,
      author,
      province,
      teleworking,
      published,
      salaryDescription,
      contractType,
      workDay,
    } = item;
    return {
      id,
      title,
      author: author.name,
      authorLogoUrl: author.logoUrl,
      authorUri: author.uri,
      province: province.value,
      teleworking: teleworking?.value,
      published,
      salaryDescription,
      contractType: contractType.value,
      workDay: workDay.value,
      // experienceMin: experienceMin.value,
      // link,
    };
  });

  return {
    totalPages,
    currentPage,
    pageSize,
    totalResults,
    offers,
  };
};
