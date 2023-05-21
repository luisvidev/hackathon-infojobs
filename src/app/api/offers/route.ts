import { validateNumber } from '@utils/validateNumber';
import { NextRequest, NextResponse } from 'next/server';
import { getOffers } from 'services/infoJobs/infoJobsApi';

export async function GET(request: NextRequest) {
  const urlParams = request.nextUrl.searchParams;
  const query = urlParams.get('q');
  try {
    const page = validateNumber(urlParams.get('page') ?? '1');

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!query) return NextResponse.json({ offers: [] });

    const response = await getOffers({ q: query, page });
    return NextResponse.json(response);
  } catch (error) {
    // TODO: validate request
  }
}
