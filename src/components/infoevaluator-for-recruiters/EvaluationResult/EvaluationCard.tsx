import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Title,
  Badge,
  Metric,
} from '@tremor/react';
import { getBadgeColor } from '@utils/getBadgeColor';
import { EvaluationForRecruiter } from 'types';

export const EvaluationCard: React.FC<EvaluationForRecruiter> = ({
  fileName,
  percentage,
  review,
}) => {
  const badgeColor = getBadgeColor(percentage);
  return (
    <Accordion>
      <AccordionHeader>
        <div className="flex  items-center gap-x-5">
          <Badge color={badgeColor} className="px-10">
            <Metric>{percentage} %</Metric>
          </Badge>
          <Title>{fileName}</Title>
        </div>
      </AccordionHeader>
      <AccordionBody>{review}</AccordionBody>
    </Accordion>
  );
};
