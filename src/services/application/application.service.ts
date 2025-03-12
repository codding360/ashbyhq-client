import { ApiService } from "@/client/api.client";
import { ConfigOptions } from "@/types/global";

import { CreateApplicationInput, IApplicationResponse } from "./types";

export class ApplicationService extends ApiService {
    constructor(configOptions: ConfigOptions) {
      super(configOptions);
    }

    async create(input: CreateApplicationInput): Promise<IApplicationResponse> {
        return this.post('/application.create', input);
    }
}