import { ApiError } from '@services/errors/ApiError';
import { NextRequest, NextResponse } from 'next/server';
import {
  GetInfoHackQuestionsRequest,
  GetInfoHackQuestionsResponse,
} from '../../../../types';
import { getQuestionHacks } from '@services/openai/getQuestionHacks';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GetInfoHackQuestionsRequest;
    const { description } = body;

    const questions = await getQuestionHacks(description);
    const data: GetInfoHackQuestionsResponse = { questions };
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(
      {
        message: (error as Error)?.message || 'unknown',
      },
      { status: 500 }
    );
  }
}
