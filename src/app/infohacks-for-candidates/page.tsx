import { SecondaryLayout } from '@components/ui/layouts/SecondaryLayout/SecondaryLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InfoHacks para candidatos',
};

export default function InfoHacks() {
  return (
    <SecondaryLayout>
      <section>
        <div
          style={{
            backgroundImage: 'url(/assets/infohacks-banner.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full h-96 rounded"
        />
        <h1 className="text-5xl font-bold text-primary  my-8">
          InfoHacks para candidatos
        </h1>
        <p className="text-xl leading-8">
          Descubre el poder de una valiosa ayuda en tu camino profesional. En
          nuestro afán por impulsar tu carrera laboral, hemos creado una
          herramienta exclusiva que te brinda el apoyo que necesitas. Antes de
          enviar tu currículum a las ofertas de trabajo en nuestro portal,
          recibirás sugerencias y recomendaciones personalizadas para maximizar
          tus posibilidades de ser seleccionado de acuerdo a tu trayectoria
          profesional. Además, hemos diseñado una funcionalidad especial que
          genera las preguntas más probables que podrías enfrentar durante una
          entrevista, basadas en la descripción del puesto. Prepárate con
          confianza y deja atrás esos incómodos nervios estomacales.{' '}
          <strong>¡Tu éxito está a un paso de distancia!</strong>
        </p>

        <div className="py-16">
          <h2 className="text-3xl font-bold mb-8">
            Mira el gif a continuación para entender como funciona
          </h2>
          <div
            style={{
              backgroundImage: 'url(/assets/infohacks.gif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-96 rounded"
          />
        </div>
      </section>
    </SecondaryLayout>
  );
}
