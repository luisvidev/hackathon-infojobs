import Image from 'next/image';

export const Introduction = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold text-primary  my-4">
        InfoEvaluator para reclutadores
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-x-5 mb-10 xl:mb-1">
        <Image
          className="max-w-xs w-full"
          src="assets/recruiter-cv.svg"
          width={50}
          height={50}
          alt="recruiter"
        />
        <p className="text-xl leading-8">
          Encontrar al candidato perfecto para una oferta de trabajo específica
          va más allá de las simples etiquetas y filtros. En reconocimiento de
          esto, hemos dado un paso adelante y nos hemos sumado al emocionante
          auge de la Inteligencia Artificial para potenciar nuestros procesos de
          selección.{' '}
          <strong>
            ¡Estamos llevando la búsqueda del candidato ideal a un nivel
            completamente nuevo!
          </strong>
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-x-5">
        <Image
          className="max-w-xs w-full"
          src="assets/recruiter-cv-2.svg"
          width={50}
          height={50}
          alt="recruiter"
        />
        <p className="text-xl leading-8">
          ¡Imagina categorizar automáticamente las hojas de vida según los
          requisitos de una oferta de trabajo utilizando IA! Nuestros
          reclutadores no tendrán que analizar cientos de hojas de vida. Podrán
          filtrar las primeras con mayor afinidad, considerando la experiencia
          requerida. Resultado: filtración eficiente en la primera fase, con un
          <strong> aumento del 80% en productividad</strong> frente a los
          métodos tradicionales.{' '}
          <strong>
            ¡Estamos transformando por completo la forma en que se realiza la
            búsqueda y selección de talento!
          </strong>
        </p>
      </div>
    </section>
  );
};
