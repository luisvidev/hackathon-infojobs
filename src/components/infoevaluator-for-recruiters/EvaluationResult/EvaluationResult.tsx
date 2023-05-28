import { BarList, Title, Bold, Flex, Text, Divider } from '@tremor/react';
import { EvaluationForRecruiter } from 'types';
import { EvaluationCard } from './EvaluationCard';

interface Props {
  evaluations: EvaluationForRecruiter[];
}

export const EvaluationResult: React.FC<Props> = ({ evaluations }) => {
  const data = evaluations.map((item) => ({
    name: item.fileName,
    value: item.percentage,
  }));
  return (
    <div>
      <Divider />
      <div className="w-full">
        <Title>Ranking</Title>
        <Flex className="mt-4">
          <Text>
            <Bold>Hoja de vida</Bold>
          </Text>
          <Text>
            <Bold>Porcentage de afinidad</Bold>
          </Text>
        </Flex>
        <BarList data={data} className="mt-2" />
      </div>
      <ul className="mt-10 w-full flex flex-col gap-y-5">
        {evaluations.map((item, index) => (
          <li key={index}>
            <EvaluationCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
