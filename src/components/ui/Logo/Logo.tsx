import Link from 'next/link';
import Image from 'next/image';
import * as styles from './styles';

export const Logo = () => (
  <Link href="/" className={styles.logoContainer}>
    <Image src="/assets/logo.svg" alt="infojobs logo" width="100" height="25" />
    <Image
      src="/assets/add.png"
      alt="plus"
      width="25"
      height="25"
      className="h-5 w-5 ml-2"
    />
  </Link>
);
