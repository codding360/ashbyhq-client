import { Candidate, Response } from "@/types/global";

export interface FindCandidateByIdInput {
    id: string;
}

export interface ExternalMappingId {
    externalMappingId: string;
}

export type FindCandidateInput = FindCandidateByIdInput | ExternalMappingId;
export type FindCandidateResponse = Response<Candidate>;