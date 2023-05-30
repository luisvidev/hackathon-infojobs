import { getOfferById } from '@services/infoJobs/getOfferById';
import { redirect } from 'next/navigation';
import React from 'react';
import { GetOfferByIdApiResponse } from '../../../types';
import { OfferTemplate } from '@components/website/offer/OfferTemplate';

export default async function Offer({
  params: { id },
}: {
  params: { id: string };
}) {
  let offer: GetOfferByIdApiResponse;
  try {
    offer = await getOfferById(id);
  } catch (error) {
    redirect('/');
  }
  return <OfferTemplate {...offer} />;
}
