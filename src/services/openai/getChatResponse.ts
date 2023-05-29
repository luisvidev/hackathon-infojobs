import { getNumberOfTokens } from '@utils/getNumberOfTokens';
import { getSystemMessageForInfoChat } from '@utils/getSystemMessageForInfoChat';
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from 'openai';
import {
  MAXIMUM_OPENAI_TOKENS,
  TEMPERATURE_DETERMINISTIC,
} from '../../constants';
import { ApiError } from '@services/errors/ApiError';
import { AxiosError } from 'axios';
import { ServiceEnum } from '@services/serivices.enum';

const openaiToken = process.env.OPENAI_API_KEY_INFOCHAT ?? '';

const configuration = new Configuration({ apiKey: openaiToken });
const openai = new OpenAIApi(configuration);

export const getChatResponse = async (question: string) => {
  const systemMessage = getSystemMessageForInfoChat();

  const totalTokens = getNumberOfTokens(
    JSON.stringify(systemMessage) + question
  );

  if (totalTokens >= MAXIMUM_OPENAI_TOKENS) {
    throw new ApiError(
      ServiceEnum.OPENAI,
      `Maximum quantity of tokens reached: ${MAXIMUM_OPENAI_TOKENS}`,
      400
    );
  }

  let data: string;
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: TEMPERATURE_DETERMINISTIC,
      messages: [
        ...systemMessage,
        {
          role: ChatCompletionRequestMessageRoleEnum.User,
          content: question,
        },
      ],
    });
    data = completion.data.choices[0].message?.content ?? '';
  } catch (error) {
    const axiosError = error as AxiosError;

    throw new ApiError(
      ServiceEnum.OPENAI,
      axiosError.response?.data?.error?.message ?? 'unknown',
      axiosError.response?.status ?? 500
    );
  }

  return data;
};
