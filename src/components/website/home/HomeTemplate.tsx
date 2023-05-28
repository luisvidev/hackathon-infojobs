'use client';
import { OfferList } from '@components/offers/OfferList/OfferList';
import { Searcher } from '@components/offers/searcher/Searcher';
import { Navbar } from '@components/ui/header/Navbar/Navbar';
import { MainLayout } from '@components/ui/layouts/MainLayout/MainLayout';

import * as styles from './styles';
import { useOfferStore } from '@store/offer-store/useOfferStore';
import { getOffers } from '@store/offer-store/selectors';
import { NoveltiesList } from '@components/novelties/NoveltiesList/NoveltiesList';

export const HomeTemplate = () => {
  const offers = useOfferStore(getOffers);
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/banner-lg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 35%',
          padding: '10px',
        }}
      >
        <MainLayout activeNavbar={false} activeFooter={false}>
          <Navbar />
          <section className="py-8 px-6">
            <h1 className={styles.title}>Siempre a mejor!</h1>
            <Searcher />
          </section>
        </MainLayout>
      </div>
      <MainLayout activeNavbar={false}>
        {!!offers && (
          <section className={styles.section}>
            <OfferList />
          </section>
        )}
        <section className={styles.section}>
          <NoveltiesList />
        </section>
      </MainLayout>
    </>
  );
};
