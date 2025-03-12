import { Response, Candidate } from "@/types/global";


export type ListCandidateResponse = Response<Candidate[]> & {
  moreDataAvailable?: boolean;
  nextCursor?: string;
  syncToken?: string;
}