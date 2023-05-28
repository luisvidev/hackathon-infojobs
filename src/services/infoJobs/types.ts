export interface GetOffersProps {
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

export interface Profile {
  id: string;
  name: string;
  description: string;
  province: InfoJobsCategory;
  web: string;
  numberWorkers: number;
  logoUrl: string;
  url: string;
  corporateWebsiteUrl: string;
  websiteUrl: string;
  hidden: boolean;
  typeIndustry: InfoJobsCategory;
  country: InfoJobsCategory;
  corporateResponsive: boolean;
  showCorporativeHeader: boolean;
  clientId: number;
  followable: boolean;
  headerImageUrl: string;
}

export interface SkillsList {
  skill: string;
}

export interface GetOfferByIdResponse {
  title: string;
  id: string;
  state: number;
  creationDate: string;
  updateDate: string;
  city: string;
  externalUrlForm: string;
  blocked: boolean;
  applications: number;
  province: InfoJobsCategory;
  experienceMin: InfoJobsCategory;
  category: InfoJobsCategory;
  subcategory: InfoJobsCategory;
  studiesMin: InfoJobsCategory;
  residence: InfoJobsCategory;
  country: InfoJobsCategory;
  contractType: InfoJobsCategory;
  journey: InfoJobsCategory;
  subSegment: number;
  profile: Profile;
  cityPD: number;
  zipCode: string;
  latitude: number;
  longitude: number;
  exactLocation: boolean;
  department: string;
  vacancies: number;
  minRequirements: string;
  description: string;
  desiredRequirements: string;
  commissions: string;
  contractDuration: string;
  referenceId: string;
  detailedStudiesId: number;
  studying: boolean;
  showPay: boolean;
  multiProvince: boolean;
  schedule: string;
  jobLevel: InfoJobsCategory;
  staffInCharge: InfoJobsCategory;
  hasKillerQuestions: number;
  hasOpenQuestions: number;
  epreselec: boolean;
  fiscalAddress: string;
  shouldAskExportConsent: boolean;
  exportConsentName: string;
  link: string;
  active: boolean;
  archived: boolean;
  deleted: boolean;
  disponibleForFullVisualization: boolean;
  availableForVisualization: boolean;
  skillsList: SkillsList[];
  salaryDescription: string;
}
