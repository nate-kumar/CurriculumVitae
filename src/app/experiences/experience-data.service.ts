import { Injectable } from '@angular/core';

import { IntExperience } from './int-experience';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  // experienceItems: IntExperience[] = [
  //   {
  //     experienceTitle: 'MATLAB script',
  //     experienceDescription: 'MATLAB script',
  //     project: 'Terrain Response & Auto Terrain Response',
  //     role: 'Software Systems Engineer',
  //     employer: 'Jaguar Land Rover',
  //     startDate: new Date(2015, 8, 1),
  //     endDate: new Date(),
  //     rankFrontEnd: 6,
  //     rankBackEnd: 2,
  //     rankProjManagement: 5,
  //     rankSystemsEng: 7,
  //   },
  //   {
  //     experienceTitle: 'Automated issues tracker',
  //     experienceDescription: 'Automated issues tracker',
  //     project: 'All Terrain Info Centre & All Surface Information',
  //     role: 'Software Systems Engineer',
  //     employer: 'Jaguar Land Rover',
  //     startDate: new Date(2017, 2, 1),
  //     endDate: new Date(2018, 7, 1),
  //     rankFrontEnd: 8,
  //     rankBackEnd: 6,
  //     rankProjManagement: 7,
  //     rankSystemsEng: 4,
  //   },
  //   {
  //     experienceTitle: 'MATLAB script',
  //     experienceDescription: 'MATLAB script',
  //     project: null,
  //     role: 'Product Development Graduate Engineer',
  //     employer: 'Jaguar Land Rover',
  //     startDate: new Date(2013, 8, 1),
  //     endDate: new Date(2015, 7, 1),
  //     rankFrontEnd: 6,
  //     rankBackEnd: 2,
  //     rankProjManagement: 5,
  //     rankSystemsEng: 7,
  //   },
  //   {
  //     experienceTitle: 'MATLAB script',
  //     experienceDescription: 'MATLAB script',
  //     project: null,
  //     role: 'Product Development Graduate Engineer',
  //     employer: 'Jaguar Land Rover',
  //     startDate: new Date(2013, 8, 1),
  //     endDate: new Date(2015, 7, 1),
  //     rankFrontEnd: 8,
  //     rankBackEnd: 2,
  //     rankProjManagement: 3,
  //     rankSystemsEng: 7,
  //   },
  // ];

  experienceItems;

  constructor(private http: HttpClient) {
    this.experienceItems = this.getExperiences();
    console.log(this.experienceItems);
  }

  getUniqueRoles() {
    return this.http.get('localhost:3000/');
  }

  getRoles() {
    return this.http.get('http://localhost:3000/roles');
      // .subscribe((body) => body);
  }

  async getExperiences() {
    if (typeof this.experienceItems === 'undefined') {
        // save result
        this.experienceItems = await this.http.get('http://localhost:3000/experiences')
        .toPromise()
        .then(res => res as IntExperience); // Do you own cast here

    }
    console.log(this.experienceItems);
    return this.experienceItems;

    // return this.http.get('http://localhost:3000/experiences');
  }

  getUniqueEmployers() {

  }

}
