import { DateUtilityService } from './date-utility.service';
import { JobDataService } from './job-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceItemComponent } from './experiences/experience-item/experience-item.component';
import { ExperiencesComponent } from './experiences/experiences.component';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceItemComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JobDataService, DateUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
