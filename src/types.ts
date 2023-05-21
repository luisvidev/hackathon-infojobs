import { InfoJobsOffer } from 'services/infoJobs/types';

export interface Offer {
  id: InfoJobsOffer['id'];
  title: InfoJobsOffer['title'];
  author: InfoJobsOffer['author']['name'];
  authorLogoUrl: InfoJobsOffer['author']['logoUrl'];
  province: InfoJobsOffer['province']['value'];
  teleworking: InfoJobsOffer['teleworking']['value'];
  published: InfoJobsOffer['published'];
}

export interface GetOffersApiResponse {
  currentPage: number;
  pageSize: number;
  totalResults: number;
  offers: Offer[];
}
