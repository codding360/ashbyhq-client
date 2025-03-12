import { Candidate, Response, Location } from "@/types/global";

export interface CreateCandidateInput {
  name: string;                              // required - The first and last name of the candidate
  email: string;                             // required - Primary, personal email of the candidate
  phoneNumber?: string;                      // Primary, personal phone number
  linkedinUrl?: string;                      // URL to candidate's LinkedIn profile
  githubUrl?: string;                        // URL to candidate's Github profile
  website?: string;                          // URL of candidate's website
  alternateEmailAddresses?: string[];        // Array of alternate email addresses
  location?: Location;                       // The location of the candidate

  sourceId?: string;                         // The source ID of the candidate
  creditedToUserId?: string;                 // The user ID of the user who credited the candidate
}

export type CreateCandidateResponse = Response<Candidate>;