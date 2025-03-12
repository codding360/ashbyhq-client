import { Errors } from "@/enums/errors.enum";

export class BadRequestError extends Error {
  constructor() {
    super(Errors.BAD_REQUEST);
    this.name = 'BadRequestError';
  }
}