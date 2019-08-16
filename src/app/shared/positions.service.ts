import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  selectedPosition = new BehaviorSubject('Front End');

  positions: string[] = [
    'Front End',
    'Back End',
    'Systems Engineering',
    'Project Management'
  ];

  rankNames: string[] = [
    'rankFrontEnd',
    'rankBackEnd',
    'rankSystemsEng',
    'rankProjManagement'
  ];

  constructor() {
  }

  getSelectedPosition() {
    return this.selectedPosition.asObservable();
  }

  setSelectedPosition(value) {
    this.selectedPosition.next(value);
  }

  getPositions() {
    return this.positions;
  }

  mapPositionToRankName(position) {

    let rankName = '';

    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i] === position) {
        rankName = this.rankNames[i];
      }
    }
    return rankName;
  }

}
