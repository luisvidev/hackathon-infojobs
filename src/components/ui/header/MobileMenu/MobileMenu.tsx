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
    <div
      className={`bg-gray-900/[.6] ${styles.mobileMenuContainer}`}
      onClick={handleHideMenu}
    >
      <div className={styles.subMobileMenuContainer} onClick={handleClick}>
        <ul className={styles.linksList}>
          <li className={styles.links}>
            <Link href="/">Buscar empleo</Link>
          </li>
          <li className={styles.links}>
            <Link href="/infochat">InfoChat</Link>
          </li>
          <li className={styles.links}>
            <Link href="/infoevaluator-for-recruiters">InfoEvaluator</Link>
          </li>
          <li className={styles.links}>
            <Link href="/infohacks-for-candidates">InfoHacks</Link>
          </li>
        </ul>
        <ul className={styles.buttonContainer}>
          <li>
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
          <li>
            <Link
              href="https://www.infojobs.net/empresas"
              target="_blank"
              rel="noreferrer"
            >
              <Button type="button" className={companyButtonStyle}>
                Acceso empresas
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
