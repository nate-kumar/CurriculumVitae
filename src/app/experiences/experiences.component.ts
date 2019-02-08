import { DateUtilityService } from './../date-utility.service';
import { Component, OnInit } from '@angular/core';
import { JobDataService } from '../job-data.service';
import { IntJob } from '../int-job';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: IntJob[];
  uniqueRoles: Set<any>;
  uniqueRolesArr;
  experiencesByRole: IntJob[];
  timeWorkedStrByRole: string[] = [];

  frontEnd = true;

  constructor(private jobDataService: JobDataService,
              private dateUtilityService: DateUtilityService) {
    // console.log(this.jobDataService.experienceItems);
    this.experiences = this.jobDataService.experienceItems;
  }

  ngOnInit() {
    this.uniqueRoles = this.uniqueValues(this.experiences, 'role');
    this.uniqueRolesArr = Array.from(this.uniqueRoles);

    this.experiencesByRole = this.splitExperiencesByRole(this.experiences, this.uniqueRoles);

    this.experiencesByRole.forEach((el) => {
      this.timeWorkedStrByRole.push(this.timeWorkedString(el[0].startDate, el[0].endDate));
    });

    console.log(this.experiencesByRole[0][0].startDate);

  }

  uniqueValues(array, prop) {
    const arrayValues = [];
    array.forEach((el) => {
      arrayValues.push(el[prop]);
    });
    return new Set(arrayValues);
  }

  splitExperiencesByRole(experiences: IntJob[], roles): IntJob[] {
    const masterArray = [];
    roles.forEach((role) => {
      const tempArray = [];
      experiences.forEach((exp) => {
        if (exp.role === role) {
          // console.log(exp.role);
          tempArray.push(exp);
        }
      });
      masterArray.push(tempArray);
    });
    // console.log(masterArray);
    return masterArray;
  }

  timeWorkedString(startDate, endDate) {
    const months = this.dateUtilityService.monthsWorked(this.dateUtilityService.totalMonths
    (startDate, endDate));
    const years = this.dateUtilityService.yearsWorked(this.dateUtilityService.totalMonths
    (startDate, endDate));
    const timeWorkedStr = this.dateUtilityService.timeWorked(years, months);
    console.log(timeWorkedStr);
    return timeWorkedStr;
  }


}
