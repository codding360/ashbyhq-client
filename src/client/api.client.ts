import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosBasicCredentials, HttpStatusCode } from 'axios';
import { Errors } from '../enums/errors.enum';

import { ConfigOptions } from '../types/global';
import { UnauthorizedError } from '@/errors/unauthorized.error';
import { BadRequestError } from '@/errors/bad-request.error';
import { InternalError } from '@/errors/internal.error';
import { NotFoundError } from '@/errors/not-found.error';


export class ApiService {
  private axiosInstance: AxiosInstance;
  private BASE_URL = 'https://api.ashbyhq.com';
  private TIMEOUT = 10000;
  private HEADERS = {
    'Content-Type': 'application/json',
  };

  constructor(configOptions: ConfigOptions) {
    if (!configOptions.auth.username && !configOptions.auth.apiKey) {
      throw new Error(Errors.INVALID_CREDENTIALS);
    }

    // Create an auth object for the axios instance
    const auth: AxiosBasicCredentials  = {
      username: configOptions.auth.username || configOptions.auth.apiKey || '',
      password: configOptions.auth.password || '',
    }

    // Merge default headers with any provided headers
    const headers: Record<string, string> = {
      ...this.HEADERS,
      ...configOptions.headers,
    }

    const baseURL: string = configOptions.baseURL || this.BASE_URL;
    const timeout: number = configOptions.timeout || this.TIMEOUT;

    // Create an axios instance with default configuration
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });

    // Add interceptors to handle responses and errors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      this.handleError,
    )
  }

  private handleError<T>(error: AxiosError<T>): T {
    switch (error.response?.status) {
      case HttpStatusCode.Unauthorized:
        throw new UnauthorizedError();
      case HttpStatusCode.BadRequest:
        throw new BadRequestError();
      case HttpStatusCode.InternalServerError:
        throw new InternalError();
      case HttpStatusCode.NotFound:
        throw new NotFoundError();
      default:
        console.error(error);
        throw new Error(Errors.SOMETHING_WENT_WRONG);
    }
  }

  // Expose the axios instance for internal use by services
  public async post<T, D>(url: string, data: D): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  public async upload<T>(url: string, data: FormData): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
}