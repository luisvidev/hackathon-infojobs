'use client';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import Image from 'next/image';
import * as styles from './styles';
import useMedia from '@components/ui/hooks/useMedia';
import { Logo } from '@components/ui/Logo/Logo';
import { useEffect, useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Button } from '@components/ui/button/Button';
import {
  candidateButton as candidateButtonStyle,
  companyButton as companyButtonStyle,
} from '@components/ui/button/styles';

export const Navbar = () => {
  const smallScreen = useMedia('smallScreen');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (smallScreen !== false) {
      setShowMenu(false);
    }
  }, [smallScreen]);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleHideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className={styles.headerContainer}>
      {smallScreen === true ? (
        <nav className={styles.navSmallScreen}>
          <button className={styles.hambuguerMenu} onClick={handleShowMenu}>
            <Image
              src="/assets/hamburguer.svg"
              alt="menu"
              width="24"
              height="24"
            />
          </button>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          {showMenu && <MobileMenu handleHideMenu={handleHideMenu} />}
        </nav>
      ) : (
        <nav className={styles.navWideScreen}>
          <ul className={styles.flexContainer}>
            <li className={styles.itemList}>
              <Link href="/" className="mr-8">
                <Image
                  src="/assets/logo.svg"
                  alt="me"
                  width="100"
                  height="25"
                />
              </Link>
            </li>
            <li className={styles.itemList}>
              <ActiveLink href="/" text="Buscar empleo" />
            </li>
            <li className={styles.itemList}>
              <ActiveLink
                href="/infoevaluator-for-recruiters"
                text="InfoEvaluator"
              />
            </li>
            <li className={styles.itemList}>
              <ActiveLink href="/salaries" text="Salarios" />
            </li>
            <li className={styles.itemList}>
              <ActiveLink href="/education" text="Formación" />
            </li>
          </ul>
          <ul className={styles.flexContainer}>
            <li className={styles.itemList}>
              <Button type="button" className={companyButtonStyle}>
                Acceso empresas
              </Button>
            </li>
            <li className={styles.itemList}>
              <Button type="button" className={candidateButtonStyle}>
                Acceso candidatos
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
