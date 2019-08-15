import { IntJob } from './../shared/int-job';
import { Injectable } from '@angular/core';

import { IntExperience } from './int-experience';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private http: HttpClient) {
  }

  getUniqueRoles() {
    return this.http.get('http://localhost:3000/');
  }

  getRoles() {
    return this.http.get('http://localhost:3000/roles');
      // .subscribe((body) => body);
  }

  getExperiences() {
    return this.http.get<IntExperience[]>('http://localhost:3000/experiences');
  }

  getUniqueEmployers() {

  }

  getJobs() {
    return this.http.get<IntJob[]>('http://localhost:3000/jobs');
  }

}
