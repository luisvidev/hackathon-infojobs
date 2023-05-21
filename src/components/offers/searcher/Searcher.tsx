'use client';
import { Button } from '@components/ui/button/Button';
import * as styles from './styles';
import { searcherButton as searcherButtonStyle } from '@components/ui/button/styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useOfferStore } from '@store/offer-store/useOfferStore';
import { setOffersRequest } from '@store/offer-store/selectors';
import { getOffers } from '@services/website/getOffers';

interface InputType {
  searcher: string;
}

export const Searcher = () => {
  const setOfferData = useOfferStore(setOffersRequest);
  const { register, handleSubmit } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = async ({ searcher }) => {
    const data = await getOffers({ keyWord: searcher, page: 1 });

    setOfferData({
      page: data.currentPage,
      totalResults: data.totalResults,
      offers: data.offers.map((item) => ({ ...item })),
    });
  };

  return (
    <form
      className={styles.searcherContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.searcherSubContainer}>
        <label className={styles.searchOffersLabel}>Busco ofertas de...</label>
        <input
          className={styles.searchOffersInput}
          placeholder="Puesto, empresa o palabra clave"
          {...register('searcher')}
        />
      </div>
      <Button
        type="submit"
        className={`${searcherButtonStyle as string} ${
          styles.searcherSubContainer2
        }`}
      >
        Buscar
      </Button>
    </form>
  );
};
