import { ConfigOptions, Status } from '@/types/global';
import {ApplicationService, JobService, CandidateService} from "@/services";

export default class AshbyClient {
    public candidate: CandidateService;
    public job: JobService;
    public application: ApplicationService;

    constructor(configOptions: ConfigOptions) {
        this.candidate = new CandidateService(configOptions);
        this.job = new JobService(configOptions);
        this.application = new ApplicationService(configOptions);
    }
}

export { AshbyClient, Status }