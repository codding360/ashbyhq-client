

import { ApiService } from '@/client/api.client';
import { ConfigOptions, Pagination } from '@/types/global';

import { 
  ListCandidateResponse, 
  CreateCandidateInput, 
  CreateCandidateResponse,
  GetCandidateResponse,
  GetCandidateInput,
  UpdateCandidateInput,
  UpdateCandidateResponse,
  FindCandidateInput,
  FindCandidateResponse,
  UploadResumeResponse,
  UploadResumeInput,
} from './interfaces';

import { Errors } from '@/enums/errors.enum';


export class CandidateService extends ApiService {
  constructor(configOptions: ConfigOptions) {
    super(configOptions);
  }

  async create(input: CreateCandidateInput): Promise<CreateCandidateResponse> {
    return this.post('/candidate.create', input);
  }

  async list(input: Pagination): Promise<ListCandidateResponse> {
    return this.post('/candidate.list', input);
  }

  async search(input: GetCandidateInput): Promise<GetCandidateResponse> {

    if (!input.email && !input.name) {
      throw new Error(Errors.EITHER_EMAIL_OR_NAME_MUST_BE_PROVIDED);
    }
    return this.post('/candidate.search', input);
  }

  async update(input: UpdateCandidateInput): Promise<UpdateCandidateResponse> {
    return this.post('/candidate.update', input);
  }

  async find(input: FindCandidateInput): Promise<FindCandidateResponse> {
    return this.post('/candidate.info', input);
  }

  async uploadResume(input: UploadResumeInput): Promise<UploadResumeResponse> {
    const formData = new FormData();
    formData.append('candidateId', input.candidateId);
    formData.append('resume', input.resume);
    return this.upload('/candidate.uploadResume', formData);
  }
} 