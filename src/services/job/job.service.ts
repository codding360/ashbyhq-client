import { ApiService } from "@/client/api.client";
import { ConfigOptions } from "@/types/global";

import { ListJobInput, ListJobResponse } from "./types";


export class JobService extends ApiService {
    constructor(configOptions: ConfigOptions) {
        super(configOptions);
    }
    async list(input: ListJobInput = {}): Promise<ListJobResponse> {
        return this.post('/job.list', input);
    }

}
