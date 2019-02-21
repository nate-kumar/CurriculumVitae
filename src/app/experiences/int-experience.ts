import { IntJob } from './../shared/int-job';
import { IntRoleCategory } from './../shared/int-role-category';

export interface IntExperience extends IntJob, IntRoleCategory {
    experienceTitle: string;
    experienceDescription: string;
}
