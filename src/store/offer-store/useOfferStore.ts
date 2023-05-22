import { create } from 'zustand';
import { OfferState } from './types';

const initialState = {
  offers: null,
  totalResults: 0,
  page: 1,
  isLoading: false,
  totalPages: 1,
  search: '',
};

export const useOfferStore = create<OfferState>()((set) => ({
  ...initialState,
  // Actions
  setOffers: (offers) => set({ offers }),
  setTotalResults: (total) => set({ totalResults: total }),
  setPage: (p) => set({ page: p }),
  setOffersRequest: (props) => set(props),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setTotalPages: (pages: number) => set({ totalPages: pages }),
  setSearch: (search: string) => set({ search }),
}));
