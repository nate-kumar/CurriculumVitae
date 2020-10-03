import { PositionsService } from './../shared/positions.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedPosition: string;
  positions: string[];

  constructor(private positionService: PositionsService) { }

  ngOnInit() {
    this.positions = this.positionService.getPositions();
    this.positionService.getSelectedPosition().subscribe((res) => {
      console.log('res' + res);
      this.selectedPosition = res;
    });
  }

  onChange($event) {
    this.positionService.setSelectedPosition($event);
  }

}




