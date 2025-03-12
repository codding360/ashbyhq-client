import {
    Response,
    ListResponse,
    ContactInfo,
    SocialLink,
    Tag,
    FileHandle,
    ICreditedToUser, IPrimaryLocation
} from "@/types/global"
import {ICustomField, ISource} from "@/types/utils"


interface ICandidate {
  readonly id: string;                                  // The unique id of the candidate
  readonly createdAt?: string;                          // Creation timestamp
  readonly updatedAt?: string;                          // Last update timestamp
  readonly name: string;                                // The candidate's name
  readonly primaryEmailAddress?: ContactInfo;   // Primary email address info
  readonly emailAddresses: ContactInfo[];              // All email addresses
  readonly primaryPhoneNumber?: ContactInfo;            // Primary phone number info (optional)
  readonly phoneNumbers: ContactInfo[];               // All phone numbers
  readonly socialLinks: SocialLink[];                 // required - Array of social media links
  readonly tags: Tag[];                               // required - Array of tags associated with the candidate
  readonly position?: string;                         // The candidate's position/title
  readonly company?: string;                          // The candidate's current company
  readonly school?: string;                           // The candidate's school
  readonly applicationIds: string[];                  // required - Unique ids of applications associated with the candidate
  readonly resumeFileHandle?: FileHandle;       // The candidate's resume file information
  readonly fileHandles: FileHandle[];                 // required - Array of all files associated with the candidate
  readonly customFields?: ICustomField[];               // Array of custom field values
  readonly profileUrl: string;                        // required - The url of the candidate's profile in Ashby
  readonly source?: ISource;                           // The source that created this candidate
  readonly creditedToUser?: ICreditedToUser;           // The user who receives credit for this user
  readonly timezone?: string;                         // The timezone of the candidate
  readonly primaryLocation?: IPrimaryLocation;                // The primary location of the candidate
}


interface CreateCandidateLocation {
    city?: string;
    region?: string;
    country?: string;
}

interface CreateCandidateInput {
    name: string;                              // required - The first and last name of the candidate
    email: string;                             // required - Primary, personal email of the candidate
    phoneNumber?: string;                      // Primary, personal phone number
    linkedinUrl?: string;                      // URL to candidate's LinkedIn profile
    githubUrl?: string;                        // URL to candidate's Github profile
    website?: string;                          // URL of candidate's website
    alternateEmailAddresses?: string[];        // Array of alternate email addresses
    location?: CreateCandidateLocation;        // The location of the candidate
    sourceId?: string;                         // The source ID of the candidate
    creditedToUserId?: string;                 // The user ID of the user who credited the candidate
}

interface UpdateCandidateInput {
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

interface GetCandidateInput { 
    email?: string; 
    name?: string; 
}

interface FindCandidateByIdInput {
    id: string;
}
interface FindCandidateByExternalMappingId {
    externalMappingId: string;
}

interface UploadResumeInput {
    candidateId: string;
    resume: File;
}

export { GetCandidateInput, CreateCandidateInput, UpdateCandidateInput, UploadResumeInput};
export type FindCandidateInput = FindCandidateByIdInput | FindCandidateByExternalMappingId;

export type IListCandidateResponse = ListResponse<ICandidate[]>;
export type ICandidateResponse = Response<ICandidate>;