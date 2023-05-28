import { ApiError } from '@services/errors/ApiError';
import { getOfferById } from '@services/infoJobs/infoJobsApi';
import { NextResponse } from 'next/server';

interface Props {
  params: {
    offerId: string;
  };
}

export async function GET(request: Request, { params: { offerId } }: Props) {
  if (!offerId)
    return new Response('Offer id is not provided', { status: 400 });

  try {
    const res = await getOfferById(offerId);
    return NextResponse.json(res);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}
