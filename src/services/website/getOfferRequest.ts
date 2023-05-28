import { GetOfferByIdApiResponse } from 'types';

export const getOfferRequest = async (offerId: string) => {
  const url = `/api/offers/${offerId}`;
  const _response = await fetch(url);
  if (!_response.ok && _response.status === 404) {
    throw new Error(`El registro con el id '${offerId}' no fue encontrado`);
  }
  if (!_response.ok) {
    throw new Error('Error en el servidor. Contacte con el administrador');
  }
  const response = (await _response.json()) as GetOfferByIdApiResponse;
  return response;
};
