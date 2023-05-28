import { SecondaryLayout } from '@components/ui/layouts/SecondaryLayout/SecondaryLayout';
import React from 'react';

export default function Offer({ params: { id } }: { params: { id: string } }) {
  return <SecondaryLayout>Hello {id}</SecondaryLayout>;
}
