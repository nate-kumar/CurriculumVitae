import { Injectable } from '@angular/core';

import { IntExperience } from './int-experience';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  experienceItems: IntExperience[] = [
    {
      role: 'Software Systems Engineer - Terrain Response & Auto Terrain Response',
      company: 'Jaguar Land Rover',
      experienceTitle: 'MATLAB script',
      experienceDescription: 'MATLAB script',
      startDate: new Date(2015, 8, 1),
      endDate: new Date(),
      rankFrontEnd: 6,
      rankBackEnd: 2,
      rankProjManagement: 5,
      rankSystemsEng: 7,
    },
    {
      role: 'Software Systems Engineer - All Terrain Info Centre & All Surface Information',
      company: 'Jaguar Land Rover',
      experienceTitle: 'Automated issues tracker',
      experienceDescription: 'Automated issues tracker',
      startDate: new Date(2017, 2, 1),
      endDate: new Date(2018, 7, 1),
      rankFrontEnd: 8,
      rankBackEnd: 6,
      rankProjManagement: 7,
      rankSystemsEng: 4,
    },
    {
      role: 'Product Development Graduate Engineer',
      company: 'Jaguar Land Rover',
      experienceTitle: 'MATLAB script',
      experienceDescription: 'MATLAB script',
      startDate: new Date(2013, 8, 1),
      endDate: new Date(2015, 7, 1),
      rankFrontEnd: 6,
      rankBackEnd: 2,
      rankProjManagement: 5,
      rankSystemsEng: 7,
    },
    {
      role: 'Product Development Graduate Engineer',
      company: 'Jaguar Land Rover',
      experienceTitle: 'MATLAB script',
      experienceDescription: 'MATLAB script',
      startDate: new Date(2013, 8, 1),
      endDate: new Date(2015, 7, 1),
      rankFrontEnd: 8,
      rankBackEnd: 2,
      rankProjManagement: 3,
      rankSystemsEng: 7,
    },
  ];

  testData = 3;

  constructor() { }
}
