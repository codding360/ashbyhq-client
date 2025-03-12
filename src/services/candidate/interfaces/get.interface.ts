import { Candidate, Response } from "@/types/global";

export interface GetCandidateInput {
  email?: string;
  name?: string;
}

export type GetCandidateResponse = Response<Candidate[]>;