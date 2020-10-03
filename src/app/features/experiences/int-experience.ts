import { IntJob } from '../shared/job.model';
import { IntRankName } from '../shared/models/rank-name.model';

export interface IntExperience extends IntJob, IntRankName {
    experienceTitle: string;
    experienceDescription: string;
}
