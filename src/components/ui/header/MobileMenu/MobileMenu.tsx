import React, { MouseEvent } from 'react';
import * as styles from './styles';
import {
  candidateButton as candidateButtonStyle,
  companyButton as companyButtonStyle,
} from '@components/ui/button/styles';
import Link from 'next/link';
import { Button } from '@components/ui/button/Button';

interface Props {
  handleHideMenu: () => void;
}

export const MobileMenu: React.FC<Props> = ({ handleHideMenu }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.mobileMenuContainer} onClick={handleHideMenu}>
      <div className={styles.subMobileMenuContainer} onClick={handleClick}>
        <ul className={styles.linksList}>
          <li className={styles.links}>
            <Link href="/search-work">Buscar empleo</Link>
          </li>
          <li className={styles.links}>
            <Link href="/search-work">Buscar empresas</Link>
          </li>
          <li className={styles.links}>
            <Link href="/search-work">Salarios</Link>
          </li>
          <li className={styles.links}>
            <Link href="/search-work">Formación</Link>
          </li>
        </ul>
        <ul className={styles.buttonContainer}>
          <li>
            <Button type="button" className={candidateButtonStyle}>
              Acceso candidatos
            </Button>
          </li>
          <li>
            <Button type="button" className={companyButtonStyle}>
              Acceso empresas
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
