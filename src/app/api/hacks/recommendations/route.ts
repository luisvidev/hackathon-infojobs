import { ApiError } from '@services/errors/ApiError';
import { NextRequest, NextResponse } from 'next/server';
import {
  GetInfoHackRecommendationsRequest,
  GetInfoHackRecommendationsResponse,
} from '../../../../types';
import { getHackRecommendations } from '@services/openai/getHackRecommendations';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GetInfoHackRecommendationsRequest;

    const recommendations = await getHackRecommendations(body);

    const data: GetInfoHackRecommendationsResponse = { recommendations };
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
