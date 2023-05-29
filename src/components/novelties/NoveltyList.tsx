import Image from 'next/image';
import { NoveltyCard } from './NoveltyCard';

export const NoveltyList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-2 items-center">
        <Image
          className="animate-bounce"
          src="assets/pic-lightbulb.svg"
          alt="pic-lightbulb"
          width={48}
          height={48}
        />
        <h1 className="font-semibold text-3xl">Novedades</h1>
      </div>
      <hr className="pb-6 w-full" />
      <div className="flex justify-center flex-wrap gap-10">
        <NoveltyCard
          title="InfoEvaluator para reclutadores!"
          content="¡Aumentamos la productividad y asertividad de los reclutadores a la hora de seleccionar candidatos!"
          href="/infoevaluator-for-recruiters"
          imagePath="assets/img-match.svg"
        />
        <NoveltyCard
          title="InfoChat"
          content="Encuentra todo en un solo lugar: nuestro chat centraliza tips, preguntas, estadísticas y más. La información que deseas, a solo un clic de distancia. ¡Descubre un mundo de conocimiento en nuestro chat!"
          href="/infochat"
          imagePath="assets/img-speaking.svg"
        />
      </div>
    </div>
  );
};
