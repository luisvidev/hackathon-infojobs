import { primaryButtonStyle } from '@components/ui/button/styles';
import { Spinner } from '@components/ui/spinner/Spinner';
import { getSuggestedQuestionsRequest } from '@services/website/getSuggestedQuestionsRequest';
import { Card } from '@tremor/react';
import Image from 'next/image';
import { useState } from 'react';
import { GetOfferByIdApiResponse } from 'types';

type DataSource = Pick<
  GetOfferByIdApiResponse,
  'languages' | 'skillsList' | 'description'
>;

interface Props extends DataSource {
  setFormLoading: (b: boolean) => void;
  isFormLoading: boolean;
}

export const SuggestedQuestions: React.FC<Props> = ({
  description,
  languages,
  skillsList,
  isFormLoading,
  setFormLoading,
}) => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleGenerateQuestionClick = async () => {
    setQuestions([]);
    setServerError(null);
    setFormLoading(true);
    try {
      const wholeDescription =
        description +
        '\nIdiomas: ' +
        languages.join(',') +
        '\nConocimiento requerido: ' +
        skillsList.join(',');

      const response = await getSuggestedQuestionsRequest({
        description: wholeDescription,
      });

      setQuestions(response.questions);
    } catch (error) {
      setServerError((error as Error)?.message ?? 'Server error');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section className="my-8">
      <div className="flex flex-col md:flex-row-reverse items-center gap-x-5 mb-10 xl:mb-1">
        <Image
          className="max-w-xs w-full"
          src="/assets/interview.svg"
          width={50}
          height={50}
          alt="questions"
        />
        <div>
          <h1 className="text-3xl font-bold my-4">
            ¿Sientes nervios antes de una entrevista?
          </h1>
          <p className="text-xl leading-8">
            ¡No te preocupes! En Infojobs+, comprendemos la importancia vital de
            una preparación sólida.Nuestra tecnología de vanguardia ha analizado
            cuidadosamente los requisitos, estudios y la descripción de la
            oferta de trabajo, generando así las preguntas más probables que
            podrían surgir durante la entrevista. Con esta valiosa herramienta,
            podrás prepararte de manera efectiva y ganar confianza, asegurándote
            así de dar lo mejor de ti en cada momento.
          </p>
          <div className="flex justify-center md:justify-start py-4" my-2>
            <button
              type="button"
              disabled={isFormLoading}
              className={primaryButtonStyle + ' min-w-[300px]'}
              onClick={handleGenerateQuestionClick}
            >
              <span>{isFormLoading ? <Spinner /> : 'Generar preguntas'}</span>
            </button>
          </div>
        </div>
      </div>
      {serverError && (
        <div>
          <span className="text-error font-bold text-sm">{serverError}</span>
        </div>
      )}
      {questions.length > 0 && (
        <section>
          <h2 className="text-lg font-bold py-4">Preguntas generadas</h2>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
            {questions.map((item) => (
              <li key={item}>
                <Card className="flex h-full">
                  <p className="whitespace-pre-wrap text-small text-gray-d1">
                    {item}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};
