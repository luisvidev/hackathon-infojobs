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

export interface GetOfferByIdApiResponse {
  id: string;
  title: string;
  logoUrl: string;
  description: string;
  authorName: string;
  teleworking: string;
  city: string;
  province: string;
  country: string;
  salaryDescription: string;
  experienceMin: string;
  contractType: string;
  journey: string;
  creationDate: string;
  corporateWebsiteUrl: string;
  studiesMin: string;
  languages: string[];
  skillsList: string[];
  minRequirements?: string;
  desiredRequirements?: string;
  typeIndustry?: string;
  category?: string;
  contractDuration?: string;
  infojobsLink?: string;
}

export interface GetInfoEvaluatorRequest {
  description: string;
  cv: string;
}

export interface GetInfoEvaluatorResponse {
  percentage: number;
  explanation: string;
}

export interface EvaluationForRecruiter {
  fileName: string;
  percentage: number;
  review: string;
}

export interface InfoEvaluatorForRecruitersForm {
  description: string;
  fileInput1?: FileList;
  fileInput2?: FileList;
  fileInput3?: FileList;
  fileInput4?: FileList;
  fileInput5?: FileList;
  fileInput6?: FileList;
  offerId?: string;
  textContentError?: string;
  checkboxAddingDescription: boolean;
  checkboxGettingDescription: boolean;
}

export type InputFiles = keyof Pick<
  InfoEvaluatorForRecruitersForm,
  'fileInput1' | 'fileInput2' | 'fileInput3' | 'fileInput4'
>;

interface SuccessEvaluationState {
  fileName: string;
  inputFile: InputFiles;
  state: 'success';
}

interface FailedEvaluationState {
  fileName: string;
  inputFile: InputFiles;
  state: 'error';
  error: string;
}

export type EvaluationState = SuccessEvaluationState | FailedEvaluationState;

export interface GetInfoChatRequest {
  message: string;
}

export interface GetInfoChatResponse {
  response: string;
}

export interface ChatBoxMessage {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
}

export interface GetInfoHackQuestionsRequest {
  description: string;
}

export interface GetInfoHackQuestionsResponse {
  questions: string[];
}

export interface GetInfoHackRecommendationsRequest {
  description: string;
  cv: string;
}

export interface GetInfoHackRecommendationsResponse {
  recommendations: string[];
}
