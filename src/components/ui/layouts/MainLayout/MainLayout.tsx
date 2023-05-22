import { Navbar } from '@components/ui/header/Navbar/Navbar';
import * as styles from './styles';
import { Footer } from '@components/ui/footer/Footer';

interface Props {
  children: React.ReactNode;
  activeNavbar?: boolean;
  activeFooter?: boolean;
}

export const MainLayout: React.FC<Props> = ({
  children,
  activeNavbar = true,
  activeFooter = true,
}) => {
  return (
    <div className={styles.mainLayoutContainer}>
      <div className={styles.mainLayoutSubContainer}>
        {activeNavbar && <Navbar />}
        {children}
        {activeFooter && <Footer />}
      </div>
    </div>
  );
};
