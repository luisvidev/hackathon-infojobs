import { Offer } from 'types';

export interface OfferState {
  search: string;
  isLoading: boolean;
  offers: Offer[] | null;
  totalResults: number;
  page: number;
  totalPages: number;
  setOffers: (offers: Offer[]) => void;
  setTotalResults: (total: number) => void;
  setPage: (p: number) => void;
  setOffersRequest: (props: {
    page: number;
    totalResults: number;
    offers: Offer[];
    totalPages: number;
  }) => void;
  setIsLoading: (isLoading: boolean) => void;
  setTotalPages: (pages: number) => void;
  setSearch: (search: string) => void;
}
