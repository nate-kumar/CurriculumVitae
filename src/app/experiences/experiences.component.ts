import { IntExperience } from './int-experience';
import { DateUtilityService } from './../shared/date-utility.service';
import { Component, OnInit } from '@angular/core';
import { JobDataService } from './experience-data.service';

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


  test: object = {_id: '', role: ''};

  frontEnd = true;

  constructor(private jobDataService: JobDataService,
              private dateUtilityService: DateUtilityService) {


  }

  ngOnInit() {
    this.jobDataService.getExperiences().subscribe((res) => {
      this.experiences = res;

      this.uniqueRoles = this.uniqueValues(this.experiences, 'role');
      this.uniqueRolesArr = Array.from(this.uniqueRoles);

      this.experiencesByRole = this.splitExperiencesByRole(this.experiences, this.uniqueRoles);

      this.experiencesByRole.forEach((el) => {
        const startDate = new Date(el[0].startDate);
        const endDate = new Date(el[0].endDate);
        this.timeWorkedStrByRole
          .push(this.timeWorkedString(startDate, endDate));
      });

    });



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
