import { Navbar } from '@components/ui/header/Navbar/Navbar';
import * as styles from './styles';
import * as stylesMainLayout from '../MainLayout/styles';
import { Footer } from '@components/ui/footer/Footer';

interface Props {
  children: React.ReactNode;
}

export const SecondaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.secondaryLayoutContainer}>
      <div
        className={`${stylesMainLayout.mainLayoutSubContainer} ${styles.secondaryLayoutSubContainer}`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
