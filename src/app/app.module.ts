import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentCardComponent } from './components/assessment-card/assessment-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyAssessmentComponent } from './components/my-assessment/my-assessment.component';
import { AssessmentOverviewComponent } from './components/assessment-overview/assessment-overview.component';
import { AssessmentAttemptedComponent } from './components/assessment-attempted/assessment-attempted.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app-state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentCardComponent,
    SidebarComponent,
    MyAssessmentComponent,
    AssessmentOverviewComponent,
    AssessmentAttemptedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('app-state', appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
