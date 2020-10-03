import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Position {
  title: string;
  rankName: string;
  colour: string;
}

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  selectedPosition = new BehaviorSubject( 'Front End' );

  positions: Position[] = [
    {
      title: 'Front End',
      rankName: 'rankFrontEnd',
      colour: '#FFF200'
    },
    {
      title: 'Back End',
      rankName: 'rankBackEnd',
      colour: '#0077FF'
    },
    {
      title: 'Systems Engineering',
      rankName: 'rankSystemsEng',
      colour: '#A100FF'
    },
    {
      title: 'Project Management',
      rankName: 'rankProjManagement',
      colour: '#8C0002'
    },
  ];

  constructor() {
  }

  getSelectedPosition() {
    return this.selectedPosition.asObservable();
  }

  setSelectedPosition( position: string ) {
    const themeColour: string = this.mapPositionToColour( position );
    document.documentElement.style
      .setProperty(
        '--primary-color',
        themeColour
      );

    this.selectedPosition.next( position );
  }

  getPositions() {
    return this.positions
      ?.map(
        ( pos: Position ) => pos.title
      );
  }

  mapPositionToPositionString( title: string ) {
    return this.positions
      ?.filter(
        ( position: Position ) => position.title === title
      )
      .map(
        ( position: Position ) => position.rankName
      )[ 0 ];
  }

  mapPositionToColour( title: string ) {
    return this.positions
      ?.filter(
        ( position: Position ) => position.title === title
      )
      .map(
        ( position: Position ) => position.colour
      )[ 0 ];
  }

}
