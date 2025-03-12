import { CandidateService } from './services/candidate/candidate.service';
import { ConfigOptions } from '@/types/global';

export default class AshbyClient {
    public candidate: CandidateService;

    constructor(configOptions: ConfigOptions) {
        this.candidate = new CandidateService(configOptions);
    }
}

export { AshbyClient }