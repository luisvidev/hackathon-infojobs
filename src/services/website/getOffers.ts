import { GetOffersApiResponse } from 'types';
import { ITEMS_PER_PAGE } from '../../constants';

interface Props {
  keyWord: string;
  page?: number;
}

export const getOffers = async (props: Props) => {
  const { keyWord, page = ITEMS_PER_PAGE } = props;

  const urlParams = new URLSearchParams({
    ...(keyWord !== '' && { q: keyWord }),
    page: page.toString(),
  });
  const url = `/api/offers?${urlParams.toString()}`;

  const _response = await fetch(url);
  const response = (await _response.json()) as GetOffersApiResponse;

  return response;
};
