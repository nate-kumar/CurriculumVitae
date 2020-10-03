import { Component, OnInit, Input } from '@angular/core';
import { IntExperience } from '../int-experience';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience: IntExperience;
  title: string;
  description: string;


  constructor() {
  }

  ngOnInit() {
    this.title = this.experience.experienceTitle;
    this.description = this.experience.experienceDescription;
  }

}
