import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentCardComponent } from './components/assessment-card/assessment-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyAssessmentComponent } from './components/my-assessment/my-assessment.component';
import { AssessmentOverviewComponent } from './components/assessment-overview/assessment-overview.component';
import { AssessmentAttemptedComponent } from './components/assessment-attempted/assessment-attempted.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentCardComponent,
    SidebarComponent,
    MyAssessmentComponent,
    AssessmentOverviewComponent,
    AssessmentAttemptedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
