import Image from 'next/image';
import Link from 'next/link';
export const NoveltiesList = () => {
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
      <div className="flex">
        <Link
          href="/infoevaluator-for-recruiters"
          className="max-w-sm bg-white hover:bg-primary-l4 shadow-2xl rounded-md cursor-pointer"
        >
          <Image
            className="w-full"
            src="assets/content-card-buscar.svg"
            width={10}
            height={50}
            alt="InfoEvaluator para reclutadores"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold leading-none mb-4 text-primary">
              InfoEvaluator para reclutadores!
            </h2>
            <p className="text-base">
              ¡Aumentamos la productividad y asertividad de los reclutadores a
              la hora de seleccionar candidatos!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
