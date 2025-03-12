
export interface AuthOptions {
  apiKey?: string;
  username?: string;
  password?: string;
}

export interface ConfigOptions {
  readonly auth: AuthOptions;
  readonly baseURL?: string;
  readonly timeout?: number;
  readonly headers?: Record<string, string>;
}

export interface Pagination {
  readonly limit: number;
  readonly cursor?: string;
  readonly syncToken?: string;
}

export interface Candidate {
  readonly id: string;                                // The unique id of the candidate
  readonly createdAt: string;                         // Creation timestamp
  readonly updatedAt: string;                         // Last update timestamp
  readonly name: string;                              // The candidate's name
  readonly primaryEmailAddress: ContactInfo;           // Primary email address info
  readonly emailAddresses: ContactInfo[];             // All email addresses
  readonly primaryPhoneNumber?: ContactInfo;          // Primary phone number info (optional)
  readonly phoneNumbers: ContactInfo[];               // All phone numbers
  readonly socialLinks: SocialLink[];                 // required - Array of social media links
  readonly tags: Tag[];                               // required - Array of tags associated with the candidate
  readonly position?: string;                         // The candidate's position/title
  readonly company?: string;                          // The candidate's current company
  readonly school?: string;                           // The candidate's school
  readonly applicationIds: string[];                  // required - Unique ids of applications associated with the candidate
  readonly resumeFileHandle?: FileHandle;             // The candidate's resume file information
  readonly fileHandles: FileHandle[];                 // required - Array of all files associated with the candidate
  readonly customFields: CustomField[];               // Array of custom field values
  readonly profileUrl: string;                        // required - The url of the candidate's profile in Ashby
  readonly source?: Source;                           // The source that created this candidate
  readonly creditedToUser?: CreditedToUser;           // The user who receives credit for this user
  readonly timezone?: string;                         // The timezone of the candidate
  readonly location?: Location;                // The primary location of the candidate
}

export interface Response<T> {
  readonly success: boolean;
  readonly results: T;
  readonly errors?: string[];
  readonly warnings?: string[];
}

export interface SocialLink {
  readonly type: string;                              // required - Type of social link
  readonly url: string;                               // required - URL of the social profile
}

export interface ContactInfo {
  readonly value: string;                             // The email address or phone number
  readonly type: string;                              // The type of contact info
  readonly isPrimary: boolean;                        // Whether this is the primary contact info
}

export interface Tag {
  readonly id: string;                                // required - The tag's unique id
  readonly title: string;                             // required - The tag's title
  readonly isArchived: boolean;                       // required - Whether the tag is archived
}

export interface Location {
  readonly city: string;
  readonly region: string;
  readonly country: string;
}

export interface FileHandle {
  readonly id: string;                                // required - The file's unique id
  readonly name: string;                              // required - The file's name
  readonly handle: string;                            // required - The file's handle for URL retrieval
}

export interface Source {
  readonly id: string;                                // The source's unique id
  readonly name: string;                              // The name of the source
  readonly type: string;                              // The type of source
}

export interface CreditedToUser {
  readonly id: string;                                // The user's unique id
  readonly name: string;                              // The name of the user
  readonly email: string;                             // The email of the user
}

export interface CustomField {
  readonly id: string;                                // required - The field's unique id
  readonly isPrivate: boolean;                        // Whether the field is private
  readonly title: string;                             // required - The field's title
  readonly value: any;                                // required - The field's value (can be various types)
}