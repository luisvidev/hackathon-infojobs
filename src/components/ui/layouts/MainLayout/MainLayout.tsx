import { Navbar } from '@components/ui/header/Navbar/Navbar';
import * as styles from './styles';

interface Props {
  children: React.ReactNode;
  activeNavbar?: boolean;
}

export const MainLayout: React.FC<Props> = ({
  children,
  activeNavbar = true,
}) => {
  return (
    <div className={styles.mainLayoutContainer}>
      <div className={styles.mainLayoutSubContainer}>
        {activeNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};
