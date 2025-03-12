import { Errors } from "@/enums/errors.enum";

export class EmailNameError extends Error {
    constructor() {
        super(Errors.EITHER_EMAIL_OR_NAME_MUST_BE_PROVIDED);
        this.name = 'ValidationError';
    }
}