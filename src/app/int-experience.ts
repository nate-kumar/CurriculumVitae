import { IntJob } from './int-job';
import { IntRoleCategory } from './int-role-category';

export interface IntExperience extends IntJob, IntRoleCategory {
    experienceTitle: string;
    experienceDescription: string;
}
