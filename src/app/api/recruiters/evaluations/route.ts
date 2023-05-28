import { NextRequest, NextResponse } from 'next/server';
import {
  GetInfoEvaluatorRequest,
  GetInfoEvaluatorResponse,
} from '../../../../types';

import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from 'openai';
import { getNumberOfTokens } from '@utils/getNumberOfTokens';
import { MAXIMUM_OPENAI_TOKENS } from '../../../../constants';
import { getSystemMessageForInfoEvaluator } from '@utils/getSystemMessageForInfoEvaluator';
import type { AxiosError } from 'axios';

const openaiToken = process.env.OPENAI_API_KEY_INFOHINTS_RECRUITERS ?? '';

const configuration = new Configuration({ apiKey: openaiToken });
const openai = new OpenAIApi(configuration);
const DETERMINISTIC = 0;

export async function POST(request: NextRequest) {
  const body = (await request.json()) as GetInfoEvaluatorRequest;
  const content = JSON.stringify(body);

  const systemMessage = getSystemMessageForInfoEvaluator();

  const systemMessageTotalTokens = getNumberOfTokens(
    JSON.stringify(systemMessage)
  );
  const userMessageTotalTokens = getNumberOfTokens(content);
  const totalTokens = systemMessageTotalTokens + userMessageTotalTokens;

  if (totalTokens >= MAXIMUM_OPENAI_TOKENS) {
    return NextResponse.json(
      {
        message: `Maximum quantity of tokens reached: ${MAXIMUM_OPENAI_TOKENS}`,
      },
      { status: 400 }
    );
  }

  let data: string;
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: DETERMINISTIC,
      messages: [
        ...systemMessage,
        {
          role: ChatCompletionRequestMessageRoleEnum.User,
          content,
        },
      ],
    });
    data = completion.data.choices[0].message?.content ?? '';
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return new NextResponse(axiosError.response.data?.error?.message, {
        status: axiosError.response.status,
      });
    }
    return new NextResponse('Error using the openai integration', {
      status: 500,
    });
  }

  try {
    const json = JSON.parse(data) as GetInfoEvaluatorResponse;
    return NextResponse.json(json);
  } catch {
    return new NextResponse("JSON couldn't be transformed", {
      status: 500,
    });
  }
}
