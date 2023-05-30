import Image from 'next/image';

export const Introduction = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold text-primary  my-4">InfoChat</h1>
      <div className="flex flex-col md:flex-row items-center gap-x-5 mb-10 xl:mb-1">
        <Image
          className="max-w-xs w-full"
          src="assets/infochat.svg"
          width={50}
          height={50}
          alt="recruiter"
        />
        <p className="text-xl leading-8">
          ¿Te gustaría descubrir más sobre nosotros? ¿Tienes preguntas,
          necesitas consejos o tips para encontrar trabajo o contratar? ¡No
          dudes en preguntar a nuestro asistente virtual! Es una herramienta
          poderosa que está aquí para resolver tus dudas y brindarte claridad.
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-x-5">
        <Image
          className="max-w-xs w-full"
          src="assets/infochat-2.svg"
          width={50}
          height={50}
          alt="recruiter"
        />
        <p className="text-xl leading-8">
          Te dejamos algunas buenas preguntas que le podrías hacer: ¿Cuál es la
          misión y visión de la empresa?, ¿Cuáles son las habilidades más
          demandadas en el mercado laboral actual?, ¿Qué consejos me darías para
          mejorar mi entrevista de trabajo y causar una buena impresión a los
          reclutadores?, ¿Cómo puedo adaptar mi currículum a las ofertas de
          empleo específicas?, ¿Qué estrategias recomendarías para hacer
          networking y ampliar mi red de contactos profesionales?...
          <br />
          <strong>¡Suelta tu imaginación y escríbenos!</strong>
        </p>
      </div>
    </section>
  );
};
