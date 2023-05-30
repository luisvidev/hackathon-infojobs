import {
  GetInfoHackQuestionsRequest,
  GetInfoHackQuestionsResponse,
} from '../../types';

export const getSuggestedQuestionsRequest = async (
  data: GetInfoHackQuestionsRequest
) => {
  const url = `/api/hacks/questions`;
  const _response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const response = await _response.json();

  if (!_response.ok) {
    console.error({ _response });
    throw new Error(response.message || 'server error');
  }

  return response as GetInfoHackQuestionsResponse;
};
