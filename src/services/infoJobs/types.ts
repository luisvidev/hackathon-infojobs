export interface GetOfferProps {
  q?: string;
  province?: string;
  category?: string;
  subcategory?: string;
  city?: string;
  country?: string;
  teleworking?: string;
  salaryMin?: number;
  salaryMax?: number;
  order?:
    | 'updated'
    | 'updated-desc'
    | 'title'
    | 'title-desc'
    | 'city'
    | 'city-desc'
    | 'author'
    | 'author-desc'
    | 'relevancia-desc'
    | 'applicants-asc';
  maxResults?: number;
  page?: number;
}

export interface GetOffersResponse {
  currentPage: number;
  pageSize: number;
  totalResults: number;
  currentResults: number;
  totalPages: number;
  availableSortingMethods: string[];
  sortBy: string;
  sinceDate: string;
  items: InfoJobsOffer[];
}

export interface InfoJobsOffer {
  id: string;
  title: string;
  province: InfoJobsCategory;
  city: string;
  link: string;
  category: InfoJobsCategory;
  contractType: InfoJobsCategory;
  subcategory: InfoJobsCategory;
  salaryMin: InfoJobsCategory;
  salaryMax: InfoJobsCategory;
  salaryPeriod: InfoJobsCategory;
  experienceMin: InfoJobsCategory;
  workDay: InfoJobsCategory;
  study: InfoJobsCategory;
  teleworking: InfoJobsCategory;
  published: Date;
  updated: Date;
  author: InfoJobsAuthor;
  requirementMin: string;
  bold: boolean;
  applications: string;
  subSegment: number;
  executive: boolean;
  salaryDescription: string;
  multiProvince: boolean;
  urgent: boolean;
  color: boolean;
}

export interface InfoJobsAuthor {
  id: string;
  privateId: number;
  name: string;
  uri: string;
  logoUrl: string;
  corporateResponsive: boolean;
  showCorporativeHeader: boolean;
}

export interface InfoJobsCategory {
  id: number;
  value: string;
}
