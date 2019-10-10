import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DateUtilityService } from './shared/date-utility.service';
import { JobDataService } from './experiences/experience-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceItemComponent } from './experiences/experience-item/experience-item.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlockHeadingComponent } from './block-heading/block-heading.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceItemComponent,
    ExperiencesComponent,
    HamburgerComponent,
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    BlockHeadingComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JobDataService, DateUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
