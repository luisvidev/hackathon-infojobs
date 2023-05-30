import Link from 'next/link';
import Image from 'next/image';
import * as styles from './styles';

export const Footer = () => {
  return (
    <div className="my-10">
      <hr className="pb-6" />
      <div className="w-full flex flex-col">
        <div className="flex justify-center mb-10">
          <h2 className="font-bold text-2xl text-center text-gray-d4">
            Hackathon{' '}
            <Link
              href="https://www.infojobs.net/"
              target="_blank"
              rel="noreferrer"
            >
              Infojobs
            </Link>{' '}
            en compañía de Midudev
          </h2>
        </div>
        <div className="w-full flex flex-col gap-y-5 md:flex-row justify-between">
          <div className={styles.footerFollowContainer}>
            <h3 className="font-bold text-lg text-gray-d2">¡Síguelos!</h3>
            <Link
              href="https://www.infojobs.net/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/logo.svg"
                width={140}
                height={30}
                alt="Infojobs website"
              />
            </Link>
            <Link
              href="https://www.twitch.tv/midudev"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://midu.dev/logo.png"
                width={150}
                height={32}
                alt="Midudev Twitch"
              />
            </Link>
          </div>
          <div className={styles.footerFollowContainer}>
            <h3 className="font-bold text-lg text-gray-d2">¡Sígueme!</h3>
            <Link
              href="https://www.linkedin.com/in/luisfernandocrucesvidal/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/linkedin.svg"
                width={32}
                height={32}
                alt="Linkedin account"
              />
            </Link>
            <Link
              href="https://github.com/luisfernandocruces"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/github.svg"
                width={32}
                height={32}
                alt="Linkedin account"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
