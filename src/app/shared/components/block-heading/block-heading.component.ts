import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-heading',
  templateUrl: './block-heading.component.html',
  styleUrls: ['./block-heading.component.scss']
})
export class BlockHeadingComponent implements OnInit {

  @Input() titleName;

  constructor() { }

  ngOnInit() {
  }

}
