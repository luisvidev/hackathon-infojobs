import { HomeTemplate } from '@components/website/home/HomeTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InfoJobs Plus',
  description:
    'Get list of work offers in InfoJobs and see the new novelties/feature with AI',
};

export default function Home() {
  return <HomeTemplate />;
}
