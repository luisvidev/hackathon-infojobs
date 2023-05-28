'use client';
import { DescriptionForm } from '@components/infoevaluator-for-recruiters/DescriptionForm/DescriptionForm';
import { Introduction } from '@components/infoevaluator-for-recruiters/Introduction';
import { SecondaryLayout } from '@components/ui/layouts/SecondaryLayout/SecondaryLayout';

export const InfoEvaluatorForRecruitersTemplate = () => {
  return (
    <SecondaryLayout>
      <div className="grow">
        <Introduction />
        <DescriptionForm />
      </div>
    </SecondaryLayout>
  );
};
