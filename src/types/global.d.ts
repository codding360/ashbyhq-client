export type ObjectType = 'Application' | 'Candidate' | 'Employee' | 'Job' | 'Offer' | 'Opening' | 'Talent_Project'
export type FieldType = 'MultiValueSelect' | 'NumberRange' | 'String' | 'Date' | 'ValueSelect' | 'Number' | 'Currency' | 'Boolean' | 'LongText' | 'CompensationRange'
export type Status = 'Draft' | 'Closed' | 'Open' | 'Archived';
export type GlobalRole = 'Organization' | 'Admin' | 'Elevated Access' | 'Limited Access' | 'External Recruiter'

export interface SelectableValue {
  readonly label?: string;
  readonly value?: string;
  readonly isArchived?: boolean;
}

export interface Response<T> {
  readonly success: boolean;
  readonly results: T;
  readonly errors?: string[];
  readonly warnings?: string[];
}

export interface ListResponse<T> {
  readonly success: boolean;
  readonly results: T;
  readonly errors?: string[];
  readonly warnings?: string[];
  readonly moreDataAvailable?: boolean;
  readonly nextCursor?: string;
  readonly syncToken?: string;
}

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
  readonly limit?: number;
  readonly cursor?: string;
  readonly syncToken?: string;
}

export interface ContactInfo {
  readonly value: string;                             // The email address or phone number
  readonly type: string;                              // The type of contact info
  readonly isPrimary: boolean;                        // Whether this is the primary contact info
}

export interface SocialLink {
  readonly type: string;                              // required - Type of social link
  readonly url: string;                               // required - URL of the social profile
}

export interface Tag {
  readonly id: string;                                // required - The tag's unique id
  readonly title: string;                             // required - The tag's title
  readonly isArchived: boolean;                       // required - Whether the tag is archived
}

export interface FileHandle {
  readonly id: string;                                // required - The file's unique id
  readonly name: string;                              // required - The file's name
  readonly handle: string;                            // required - The file's handle for URL retrieval
}

export interface ICreditedToUser {
  readonly id: string;                                // The user's unique id
  readonly firstName: string;                              // The name of the user
  readonly lastName: string;                             // The email of the user
  readonly email: string;
  readonly globalRole: GlobalRole;
  readonly isEnabled: boolean;
  readonly updatedAt: string;
}

export interface ILocationComponent {
  readonly type: 'Country' | 'Region' | 'City';
  readonly name: string;
}

export interface IPrimaryLocation {
  readonly id: string
  readonly locationSummary: string;
  readonly locationComponents: ILocationComponent[];
}


