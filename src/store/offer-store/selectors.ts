import { OfferState } from './types';

export const getOffers = (state: OfferState) => state.offers;
export const getPageOffer = (state: OfferState) => state.page;
export const getTotalOffers = (state: OfferState) => state.totalResults;
export const setOffers = (state: OfferState) => state.setOffers;
export const setOffersRequest = (state: OfferState) => state.setOffersRequest;
