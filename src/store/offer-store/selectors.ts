import { OfferState } from './types';

export const getIsLoading = (state: OfferState) => state.isLoading;
export const getSearch = (state: OfferState) => state.search;
export const getOffers = (state: OfferState) => state.offers;
export const getCurrentPage = (state: OfferState) => state.page;
export const getTotalOffers = (state: OfferState) => state.totalResults;
export const getTotalPages = (state: OfferState) => state.totalPages;
export const setOffers = (state: OfferState) => state.setOffers;
export const setOffersRequest = (state: OfferState) => state.setOffersRequest;
export const setIsLoading = (state: OfferState) => state.setIsLoading;
export const setTotalPages = (state: OfferState) => state.setTotalPages;
export const setSearch = (state: OfferState) => state.setSearch;
