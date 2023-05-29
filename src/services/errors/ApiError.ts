import { ServiceEnum } from '@services/serivices.enum';

export class ApiError extends Error {
  constructor(
    service: ServiceEnum,
    message: string,
    public statusCode: number
  ) {
    super(`${service} - ${message}`);
    this.name = 'ApiError';
  }
}
