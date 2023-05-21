import Link from 'next/link';
import Image from 'next/image';
import * as styles from './styles';

export const Logo = () => (
  <Link href="/" className={styles.logoContainer}>
    <Image src="/assets/logo.svg" alt="infojobs logo" width="100" height="25" />
  </Link>
);
