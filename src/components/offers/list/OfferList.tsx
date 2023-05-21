import { OfferItem } from './OfferItem';
import * as styles from './styles';
import { useOfferStore } from '@store/offer-store/useOfferStore';
import {
  getOffers,
  getPageOffer,
  getTotalOffers,
} from '@store/offer-store/selectors';

export const OfferList = () => {
  const totalOffers = useOfferStore(getTotalOffers);
  const offers = useOfferStore(getOffers);
  const page = useOfferStore(getPageOffer);

  return (
    <div>
      <p>
        Total Ofertas: {totalOffers}, página: {page}
      </p>
      <ul className={styles.offerList}>
        {(offers ?? []).map((offer) => (
          <li key={offer.id}>
            <OfferItem offer={offer} />
          </li>
        ))}
      </ul>
    </div>
  );
};
