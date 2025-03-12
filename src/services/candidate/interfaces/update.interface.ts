import { Candidate, SocialLink, Location, Response } from "@/types/global";

export type UpdateCandidateInput = {
    candidateId: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    website?: string;
    alternateEmail?: string;
    socialLinks?: SocialLink[];
    sourceId?: string;
    creditedToUserId?: string;
    location?: Location;
    sendNotifications?: boolean;
}

export type UpdateCandidateResponse = Response<Candidate>;