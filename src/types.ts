import { InfoJobsOffer } from 'services/infoJobs/types';

export interface Offer {
  id: InfoJobsOffer['id'];
  title: InfoJobsOffer['title'];
  author: InfoJobsOffer['author']['name'];
  authorLogoUrl: InfoJobsOffer['author']['logoUrl'];
  authorUri: InfoJobsOffer['author']['uri'];
  province: InfoJobsOffer['province']['value'];
  teleworking: InfoJobsOffer['teleworking']['value'];
  published: InfoJobsOffer['published'];
  salaryDescription: InfoJobsOffer['salaryDescription'];
  contractType: InfoJobsOffer['contractType']['value'];
  workDay: InfoJobsOffer['workDay']['value'];
}

export interface GetOffersApiResponse {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  totalResults: number;
  offers: Offer[];
}
