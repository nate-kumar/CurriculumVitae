import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IntJob } from './../shared/int-job';
import { IntExperience } from './int-experience';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private http: HttpClient) {
  }

  getRoles() {
    return this.http.get('http://localhost:3000/roles');
  }

  getExperiences() {
    return this.http.get<IntExperience[]>('http://localhost:3000/experiences');
  }

  getJobs() {
    return this.http.get<IntJob[]>('http://localhost:3000/jobs');
  }

}
