import { Candidate, Response } from "@/types/global";

export type UploadResumeResponse = Response<Candidate>;

export interface UploadResumeInput {
  candidateId: string;
  resume: File;
}