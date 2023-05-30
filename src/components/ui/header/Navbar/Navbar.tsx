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
              <ActiveLink href="/infochat" text="InfoChat" />
            </li>
            <li className={styles.itemList}>
              <ActiveLink
                href="/infoevaluator-for-recruiters"
                text="InfoEvaluator"
              />
            </li>
            <li className={styles.itemList}>
              <ActiveLink href="/infohacks-for-candidates" text="InfoHacks" />
            </li>
          </ul>
          <ul className={styles.flexContainer}>
            <li className={styles.itemList}>
              <Link
                href="https://www.infojobs.net/empresas"
                target="_blank"
                rel="noreferrer"
                className="mr-2"
              >
                <Button type="button" className={companyButtonStyle}>
                  Acceso empresas
                </Button>
              </Link>
            </li>
            <li className={styles.itemList}>
              <Link
                href="https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="button" className={candidateButtonStyle}>
                  Acceso candidatos
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
