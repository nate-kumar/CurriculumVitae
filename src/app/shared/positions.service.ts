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

  positionThemeColours: string[] = [
    '#FFF200',
    '#0077FF',
    '#A100FF',
    '#8C0002'
  ];

  constructor() {
  }

  getSelectedPosition() {
    return this.selectedPosition.asObservable();
  }

  setSelectedPosition(position) {
    this.selectedPosition.next(position);
    const themeColour = this.mapPositionToColour(position);
    document.documentElement.style.setProperty('--primary-color', themeColour);
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

  mapPositionToColour(position) {

    let colour = '';

    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i] === position) {
        colour = this.positionThemeColours[i];
      }
    }
    return colour;
  }

}
