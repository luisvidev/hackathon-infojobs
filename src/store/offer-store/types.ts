import { Offer } from 'types';

export interface OfferState {
  offers: Offer[] | null;
  totalResults: number;
  page: number;
  setOffers: (offers: Offer[]) => void;
  setTotalResults: (total: number) => void;
  setPage: (p: number) => void;
  setOffersRequest: (props: {
    page: number;
    totalResults: number;
    offers: Offer[];
  }) => void;
}
