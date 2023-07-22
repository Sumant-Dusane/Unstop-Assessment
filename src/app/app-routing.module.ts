import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAssessmentComponent } from './components/my-assessment/my-assessment.component';

const routes: Routes = [
  {path: '', redirectTo: 'my-assessment', pathMatch: 'full'},
  {path: 'my-assessment', component: MyAssessmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
