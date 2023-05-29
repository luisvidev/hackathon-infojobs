import { GetInfoChatRequest, GetInfoChatResponse } from '../../types';

export const getChatMessageRequest = async (data: GetInfoChatRequest) => {
  const url = `/api/chat`;
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

  return response as GetInfoChatResponse;
};
