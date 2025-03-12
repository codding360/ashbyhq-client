export enum Errors {
  INVALID_CREDENTIALS = 'Username or Api Key required for authentication.',

  EITHER_EMAIL_OR_NAME_MUST_BE_PROVIDED = 'Either email or name must be provided',

  UNAUTHORIZED = 'Provided credentials are invalid or expired.',

  BAD_REQUEST = 'The request was malformed or invalid.',

  INTERNAL_SERVER_ERROR = 'An error occurred on the server.',

  SOMETHING_WENT_WRONG = 'Something went wrong',

  NOT_FOUND = 'Not found',
}
