

import { ApiService } from '@/client/api.client';
import { ConfigOptions, Pagination } from '@/types/global';

import { CreateCandidateInput, 
  FindCandidateInput,  
  GetCandidateInput, 
  UpdateCandidateInput, 
  UploadResumeInput, 
  ICandidateResponse,
  IListCandidateResponse
  } from './types';

import { Errors } from '@/enums/errors.enum';
import { EmailNameError } from '@/errors/email-name.error';


export class CandidateService extends ApiService {
  constructor(configOptions: ConfigOptions) {
    super(configOptions);
  }

  async create(input: CreateCandidateInput): Promise<ICandidateResponse> {
    return this.post('/candidate.create', input);
  }

  async list(input: Pagination = {}): Promise<IListCandidateResponse> {
    return this.post('/candidate.list', input);
  }

  async search(input: GetCandidateInput): Promise<IListCandidateResponse> {

    if (!input.email && !input.name) {
      throw new EmailNameError();
    }
    return this.post('/candidate.search', input);
  }

  async update(input: UpdateCandidateInput): Promise<ICandidateResponse> {
    return this.post('/candidate.update', input);
  }

  async find(input: FindCandidateInput): Promise<ICandidateResponse> {
    return this.post('/candidate.info', input);
  }

  async uploadResume(input: UploadResumeInput): Promise<ICandidateResponse> {
    const formData = new FormData();
    formData.append('candidateId', input.candidateId);
    formData.append('resume', input.resume);
    return this.upload('/candidate.uploadResume', formData);
  }
} 