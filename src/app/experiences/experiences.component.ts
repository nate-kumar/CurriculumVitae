import { IntExperience } from './int-experience';
import { DateUtilityService } from './../shared/date-utility.service';
import { Component, OnInit } from '@angular/core';
import { JobDataService } from './experience-data.service';
import { IntJob } from './../shared/int-job';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

    this.experiences = this.jobDataService.experienceItems;
    this.jobDataService.getRoles().subscribe((res) => this.test = res);
  }

  ngOnInit() {
    this.experiences
      .then((res, rej) => res
        .map((item) => console.log(item.role)
        )
      );
    /*
    this.uniqueRoles = this.uniqueValues(this.experiences, 'role');
    this.uniqueRolesArr = Array.from(this.uniqueRoles);

    this.experiencesByRole = this.splitExperiencesByRole(this.experiences, this.uniqueRoles);

    this.experiencesByRole.forEach((el) => {
      this.timeWorkedStrByRole
        .push(this.timeWorkedString(el[0].startDate, el[0].endDate));
    });

    console.log(this.experiencesByRole[0][0].startDate);
    */
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
          // console.log(exp.role);
          tempArray.push(exp);
        }
      });

      masterArray.push(tempArray);
    });
    // console.log(masterArray);
    return masterArray;
  }

  sortByRank(experiences: IntExperience[], position) {
    // experiences.sort by position (e.g. rankFrontEnd)
  }

  sortByRole(experiences: IntExperience[], position) {
    // experiences.sort by job (e.g. Systems Eng @ JLR)
  }

  // replace "role" with "job" (e.g. Systems Eng @ JLR), and use "role" and "position" interchangeably


  timeWorkedString(startDate, endDate) {
    const months = this.dateUtilityService
      .monthsWorked(
        this.dateUtilityService.totalMonths(startDate, endDate)
      );
    const years = this.dateUtilityService
      .yearsWorked(
        this.dateUtilityService.totalMonths(startDate, endDate)
      );
    const timeWorkedStr = this.dateUtilityService.timeWorked(years, months);

    console.log(timeWorkedStr);
    return timeWorkedStr;
  }


}
