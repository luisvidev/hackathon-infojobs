import { InfoEvaluatorForRecruitersTemplate } from '@components/website/infoevaluator-for-recruiters/InfoEvaluatorForRecruitersTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InfoEvaluator para reclutadores',
};

export default function InfoEvaluatorForRecruiters() {
  return (
    <>
      <InfoEvaluatorForRecruitersTemplate />
    </>
  );
}
