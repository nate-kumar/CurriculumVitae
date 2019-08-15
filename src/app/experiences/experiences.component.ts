import { ArrayUtilityService } from './../shared/array-utility.service';
import { IntExperience } from './int-experience';
import { DateUtilityService } from './../shared/date-utility.service';
import { Component, OnInit } from '@angular/core';
import { JobDataService } from './experience-data.service';
import { IntJob } from '../shared/int-job';
import { Observable, merge } from 'rxjs';
import { mergeMap, concat, map } from 'rxjs/operators';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: IntExperience[] = [];
  uniqueJobs: Set<string>;
  uniqueJobsArr: string[];
  experiencesByRole: Array<IntExperience[]>;
  experiencesByRoleByRank: Array<IntExperience[]>;
  timeWorkedStrByRole: string[] = [];
  jobs: IntJob[];
  jobsByDate: IntJob[];

  frontEnd = true;

  constructor(private jobDataService: JobDataService,
              private dateUtilityService: DateUtilityService,
              private arrayUtilityService: ArrayUtilityService) {
  }

  ngOnInit() {
    const jobs$ = this.jobDataService.getJobs();
    const experiences$ = this.jobDataService.getExperiences();

    jobs$.subscribe((res) => {
      this.jobs = res;
    });

    experiences$.subscribe((res) => {
      // Initialise array of experiences
      this.experiences = res;
      console.log(this.experiences);

      // Split experiences array into n subarrays of experiences grouped by role and sorted by
      // job date
      this.jobsByDate = this.sortJobsByDate(this.jobs);
      this.experiencesByRole = this.splitExperiencesByJob(this.experiences, this.jobsByDate);
      this.experiencesByRoleByRank = this.sortArrayExperiencesByRank(
        this.experiencesByRole, 'rankProjManagement');

      console.log(this.experiencesByRoleByRank);

      // Calculate timeworked for each role
      this.jobs.forEach((job) => {
        const startDate = new Date(job.startDate);
        const endDate = new Date(job.endDate);
        const timeWorkedStr = this.dateUtilityService.timeWorkedString(startDate, endDate);
        this.timeWorkedStrByRole
          .push(timeWorkedStr);
      });

    });

    // const jobsExperiences$ = merge(
    //   experiences$,
    //   jobs$
    // ).subscribe((res) => console.log(res));

  }

  splitExperiencesByJob(experiences: IntExperience[], jobs: IntJob[]): Array<IntExperience[]> {
    const masterArray = [];

    jobs.forEach((job) => {
      const tempArray = [];

      experiences.forEach((exp) => {
        if (exp.role === job.role) {
          tempArray.push(exp);
        }
      });

      masterArray.push(tempArray);
    });
    return masterArray;
  }


  sortJobsByDate(jobs: IntJob[]): IntJob[] {

    const jobsSorted = jobs.slice().sort((a, b) => {
      if (a.startDate > b.startDate) {
        return -1;
      }
      if (a.startDate < b.startDate) {
        return 1;
      }
      return 0;
    });

    return jobsSorted;
  }


  sortExperiencesByRank(experiences: IntExperience[], position): IntExperience[] {
    // experiences.sort by position (e.g. rankFrontEnd)

    const experiencesSorted = experiences.slice().sort((a, b) => {
      if (a[position] > b[position]) {
        return -1;
      }
      if (a[position] < b[position]) {
        return 1;
      }
      return 0;
    });

    return experiencesSorted;
  }

  sortArrayExperiencesByRank(arrayExperiences: Array<IntExperience[]>, position) {

    const arrayExperiencesSorted = [];

    arrayExperiences.slice().forEach((experiences) => {
      console.table(experiences);
      const experiencesByRank = this.sortExperiencesByRank(experiences, position);
      console.table(experiencesByRank);
      arrayExperiencesSorted.push(experiencesByRank);
    });

    console.table(arrayExperiencesSorted);

    return arrayExperiencesSorted;

  }

  sortExperiencesByRole(experiences: IntExperience[], position) {
    // experiences.sort by job (e.g. Systems Eng @ JLR)
  }

  // replace "role" with "job" (e.g. Systems Eng @ JLR), and use "role" and "position" interchangeably

}
