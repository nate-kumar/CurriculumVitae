import { PositionsService } from './../shared/positions.service';
import { ArrayUtilityService } from './../shared/array-utility.service';
import { IntExperience } from './int-experience';
import { DateUtilityService } from './../shared/date-utility.service';
import { Component, OnInit } from '@angular/core';
import { JobDataService } from './experience-data.service';
import { IntJob } from '../shared/job.model';
import { Observable, merge, Subscription, combineLatest } from 'rxjs';
import { mergeMap, concat, map } from 'rxjs/operators';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: IntExperience[] = [];

  experiencesByJobByRank: IntExperience[][];

  jobs: IntJob[];

  constructor(
    private jobDataService: JobDataService,
    private dateUtilityService: DateUtilityService,
    private positionsService: PositionsService) {
  }

  ngOnInit() {
    this.setupContent();
  }

  public getSelectedPositionObs(): Observable<string> {
    return this.positionsService.getSelectedPosition()
  }

  public getJobsObs(): Observable<IntJob[]> {
    return this.jobDataService.getJobs();
  }

  public getExperiencesObs(): Observable<IntExperience[]> {
    return this.jobDataService.getExperiences();
  }

  public setupContent() {
    const jobs$ = this.getJobsObs();
    const experiences$ = this.getExperiencesObs();
    const selectedPosition$ = this.getSelectedPositionObs();

    const observables: Observable<any>[] = 
      [ 
        jobs$, 
        experiences$,
        selectedPosition$
      ]

    combineLatest( observables )
      .subscribe(
        ( [ jobs, experiences, selectedPosition ]: [ IntJob[], IntExperience[], string ] ) => {
          const selectedPositionString: string = this.positionsService.mapPositionToPositionString( selectedPosition );
          const jobsSortedByDate: IntJob[] = 
            this.sortJobsByDate( jobs )
              .map(
                ( job: IntJob ) => this.assignTimeWorkedString( job )
              );

          const groupedExperiencesByJob = 
            this.groupExperiencesByJob(
              experiences, 
              jobsSortedByDate
            );

          this.experiencesByJobByRank = 
            this.sortArrayExperiencesByRank(
              groupedExperiencesByJob, 
              selectedPositionString
            );

          this.jobs = jobsSortedByDate;
          this.experiences = experiences;
        }
      )
  }

  public assignTimeWorkedString( job: IntJob ): IntJob {
    job[ 'timeWorked' ] = this.generateTimeWorkedString( job )
    return job;
  }

  public generateTimeWorkedString( job: IntJob ): string {
    const startDate: Date = new Date( job.startDate );
    const endDate: Date = new Date( job.endDate );
    const timeWorkedStr: string = 
      this.dateUtilityService.timeWorkedString(
        startDate, 
        endDate
      );

    return timeWorkedStr;
  }

  public groupExperiencesByJob(
    experiences: IntExperience[], 
    jobs: IntJob[]
  ): IntExperience[][] {
    const experiencesGroupedByJob = [];

    jobs.forEach(
      ( job: IntJob ) => {
        const splitExperiencesPerJob: IntExperience[] = 
          experiences.filter(
            ( experience: IntExperience ) => 
              experience.role === job.role
              && experience.project === job.project
          );

        experiencesGroupedByJob.push( splitExperiencesPerJob );
      }
    );

    return experiencesGroupedByJob;
  }

  public sortJobsByDate( jobs: IntJob[] ): IntJob[] {
    const jobsSorted = 
      jobs
        .slice()
        .sort(
          ( job1: IntJob, 
            job2: IntJob ) => {
            if ( job1.startDate === job2.startDate ) {
              return 0
            }
            else {
              return job1.startDate > job2.startDate
                ? -1
                : 1
            }
          }
        );

    return jobsSorted;
  }


  sortExperiencesByRank(
    experiences: IntExperience[], 
    position
  ): IntExperience[] {
    // experiences.sort by position (e.g. rankFrontEnd)
    const experiencesSorted = 
      experiences
        .slice()
        .sort(
          ( experience1: IntExperience, 
            experience2: IntExperience ) => {
            if ( experience1[ position ] === experience2[ position ] ) {
              return 0
            }
            else {
              return experience1[ position ] > experience2[ position ]
                ? -1
                : 1
            }
          }
        );

    return experiencesSorted;
  }

  sortArrayExperiencesByRank(arrayExperiences: Array<IntExperience[]>, position) {
    const arrayExperiencesSorted = [];

    arrayExperiences
      .slice()
      .forEach(
        ( experiencesPerJob: IntExperience[] ) => {
          const experiencesByRank = 
            this.sortExperiencesByRank(
              experiencesPerJob, 
              position
            );

          arrayExperiencesSorted.push( experiencesByRank );
        }
      );

    return arrayExperiencesSorted;
  }

  sortExperiencesByJob(experiences: IntExperience[], position) {
    // experiences.sort by job (e.g. Systems Eng @ JLR)
  }

  // replace "role" with "job" (e.g. Systems Eng @ JLR), and use "role" and "position" interchangeably

}
