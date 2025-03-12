import { Errors } from "@/enums/errors.enum";

export class InternalError extends Error {
  constructor() {
    super(Errors.INTERNAL_SERVER_ERROR);
    this.name = 'InternalError';
  }
}