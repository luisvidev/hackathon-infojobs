import { create } from 'zustand';
import { OfferState } from './types';

const initialState = {
  offers: null,
  totalResults: 0,
  page: 1,
};

export const useOfferStore = create<OfferState>()((set) => ({
  ...initialState,
  // Actions
  setOffers: (offers) => set({ offers }),
  setTotalResults: (total) => set({ totalResults: total }),
  setPage: (p) => set({ page: p }),
  setOffersRequest: (props) => set(props),
}));
