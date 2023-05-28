import { GetInfoEvaluatorRequest, GetInfoEvaluatorResponse } from '../../types';

export const getInfoEvaluatorRequest = async (
  props: GetInfoEvaluatorRequest
) => {
  const url = `/api/recruiters/evaluations`;
  const _response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props),
  });

  if (!_response.ok && _response.status === 400) {
    throw new Error(`El contenido de la hoja de vida debe ser más corto`);
  }

  if (!_response.ok) {
    console.error({ _response });
    throw new Error('Error en el servidor. Contacte con el administrador');
  }

  const response = await _response.json();
  return response as GetInfoEvaluatorResponse;
};
