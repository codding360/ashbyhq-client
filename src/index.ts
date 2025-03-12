import { ConfigOptions, Status } from '@/types/global';
import {ApplicationService, JobService, CandidateService} from "@/services";

export class AshbyClient {
    public candidate: CandidateService;
    public job: JobService;
    public application: ApplicationService;

    constructor(configOptions: ConfigOptions) {
        this.candidate = new CandidateService(configOptions);
        this.job = new JobService(configOptions);
        this.application = new ApplicationService(configOptions);
    }
}

// Export types and enums
export type { ConfigOptions } from '@/types/global';
export { Status } from '@/types/global';

// Create a default export as well
export default AshbyClient;