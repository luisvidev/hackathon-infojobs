'use client';
import { Button } from '@components/ui/button/Button';
import * as styles from './styles';
import { searcherButton as searcherButtonStyle } from '@components/ui/button/styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useOfferStore } from '@store/offer-store/useOfferStore';
import {
  getIsLoading,
  setOffersRequest,
  setIsLoading,
  setSearch,
} from '@store/offer-store/selectors';
import { getOffersRequest } from '@services/website/getOffersRequest';
import { OFFER_SECTION } from '../../../constants';
import { Spinner } from '@components/ui/spinner/Spinner';

interface InputType {
  searcher: string;
}

export const Searcher = () => {
  const setOfferData = useOfferStore(setOffersRequest);
  const setIsRequestLoading = useOfferStore(setIsLoading);
  const setSearchByKeyWord = useOfferStore(setSearch);
  const isLoading = useOfferStore(getIsLoading);
  const { register, handleSubmit } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = async ({ searcher }) => {
    setSearchByKeyWord(searcher);
    setIsRequestLoading(true);
    const data = await getOffersRequest({ keyWord: searcher, page: 1 });

    document
      .getElementById(OFFER_SECTION)
      ?.scrollIntoView({ behavior: 'smooth' });

    setOfferData({
      page: data.currentPage,
      totalResults: data.totalResults,
      offers: data.offers.map((item) => ({ ...item })),
      totalPages: data.totalPages,
    });
    setIsRequestLoading(false);
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
        disabled={isLoading}
        className={`${searcherButtonStyle as string} ${
          styles.searcherSubContainer2
        }`}
      >
        {isLoading ? <Spinner /> : 'Buscar'}
      </Button>
    </form>
  );
};
