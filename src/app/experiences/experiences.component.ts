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
  uniqueRoles: Set<any>;
  uniqueRolesArr;
  experiencesByRole: IntExperience[];
  timeWorkedStrByRole: string[] = [];
  jobs: IntJob[];

  test: object = {_id: '', role: ''};

  frontEnd = true;

  constructor(private jobDataService: JobDataService,
              private dateUtilityService: DateUtilityService) {
  }

  ngOnInit() {

    const jobs$ = this.jobDataService.getJobs();

    jobs$.subscribe((res) => {
      this.jobs = res;
    });

    const experiences$ = this.jobDataService.getExperiences();

    experiences$.subscribe((res) => {

      // Initialise array of experiences
      this.experiences = res;

      // Get all roles against each experience and return unique array of roles
      this.uniqueRoles = this.uniqueValues(this.experiences, 'role');
      this.uniqueRolesArr = Array.from(this.uniqueRoles);

      // Split experiences array into n subarrays of experiences grouped by role
      this.experiencesByRole = this.splitExperiencesByRole(this.experiences, this.uniqueRoles);

      // Calculate timeworked for each role
      this.jobs.forEach((job) => {
        const startDate = new Date(job.startDate);
        const endDate = new Date(job.endDate);
        this.timeWorkedStrByRole
          .push(this.timeWorkedString(startDate, endDate));
      });

    });

    // const jobsExperiences$ = merge(
    //   experiences$,
    //   jobs$
    // ).subscribe((res) => console.log(res));

  }



  uniqueValues(array, prop) {
    const arrayValues = [];

    array.forEach((el) => {
      arrayValues.push(el[prop]);
    });
    return new Set(arrayValues);
  }

  splitExperiencesByRole(experiences: IntExperience[], roles): IntExperience[] {
    const masterArray = [];

    roles.forEach((role) => {
      const tempArray = [];

      experiences.forEach((exp) => {
        if (exp.role === role) {
          tempArray.push(exp);
        }
      });

      masterArray.push(tempArray);
    });
    return masterArray;
  }

  sortByRank(experiences: IntExperience[], position) {
    // experiences.sort by position (e.g. rankFrontEnd)
  }

  sortByRole(experiences: IntExperience[], position) {
    // experiences.sort by job (e.g. Systems Eng @ JLR)
  }

  // replace "role" with "job" (e.g. Systems Eng @ JLR), and use "role" and "position" interchangeably


  timeWorkedString(startDate: Date, endDate: Date) {

    const months = this.dateUtilityService
      .monthsWorked(
        this.dateUtilityService.totalMonths(startDate, endDate)
      );

    const years = this.dateUtilityService
      .yearsWorked(
        this.dateUtilityService.totalMonths(startDate, endDate)
      );

    const timeWorkedStr = this.dateUtilityService.timeWorked(years, months);
    return timeWorkedStr;
  }


}
