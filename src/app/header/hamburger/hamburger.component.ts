import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  toggleState = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHamburger() {
    this.toggleState = !this.toggleState;
  }

}
