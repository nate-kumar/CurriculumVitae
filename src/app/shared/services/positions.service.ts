import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Position {
  title: string;
  rankName: string;
  colour: string;
}

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  selectedPosition: BehaviorSubject<string> = new BehaviorSubject( 'Front End' );

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

  constructor() {}

  getSelectedPosition(): Observable<string> {
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

  getPositions(): string {
    return this.positions
      ?.map(
        ( pos: Position ) => pos.title
      )[ 0 ];
  }

  mapPositionToPositionString( title: string ): string {
    return this.positions
      ?.filter(
        ( position: Position ) => position.title === title
      )
      .map(
        ( position: Position ) => position.rankName
      )[ 0 ];
  }

  mapPositionToColour( title: string ): string {
    return this.positions
      ?.filter(
        ( position: Position ) => position.title === title
      )
      .map(
        ( position: Position ) => position.colour
      )[ 0 ];
  }

}
