import { Errors } from '@/enums/errors.enum';

export class UnauthorizedError extends Error {
  constructor() {
    super(Errors.UNAUTHORIZED);
    this.name = 'UnauthorizedError';
  }
}
