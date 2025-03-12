import { Errors } from '@/enums/errors.enum';

export class NotFoundError extends Error {
  constructor() {
    super(Errors.NOT_FOUND);
  }
}