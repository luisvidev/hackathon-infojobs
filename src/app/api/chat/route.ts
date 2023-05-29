import { ApiError } from '@services/errors/ApiError';
import { getChatResponse } from '@services/openai/getChatResponse';
import { NextRequest, NextResponse } from 'next/server';
import { GetInfoChatRequest } from '../../../types';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GetInfoChatRequest;
    const content = JSON.stringify(body);

    const response = await getChatResponse(content);
    return NextResponse.json({ response });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json({
      message: (error as Error)?.message || 'unknown',
    });
  }
}
