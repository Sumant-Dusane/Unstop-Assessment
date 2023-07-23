import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/service/common-service.service';
import { Store } from '@ngrx/store';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { addAssessment } from 'src/app/app-state/app.action';
import { Assessment } from 'src/app/app-state/app.state';
import { assessmentSelector } from 'src/app/app-state/app.reducer';

@Component({
  selector: 'app-assessment-attempted',
  templateUrl: './assessment-attempted.component.html',
  styleUrls: ['./assessment-attempted.component.scss']
})
export class AssessmentAttemptedComponent{
  createNewAssessment: boolean = false;
  showAssessmentOverview: boolean;
  assessments: any[] = [];
  formData: FormGroup;

  @Output() assessmentOverviewHandler = new EventEmitter<boolean>();

  constructor(private commonService: CommonService, private store: Store, private _fb: FormBuilder) {
    this.commonService.isModalOpened.subscribe(state => {
      this.createNewAssessment = state;
    });

    this.store.select(assessmentSelector).subscribe((assessment: Assessment[]) => {
      let response = assessment;
      this.setData(response);
    })

    this.formData = this._fb.group({
      id: this._fb.control(Date.now().toString()),
      name: this._fb.control('', [Validators.required, Validators.maxLength(2)]),
      purpose: this._fb.control('', [Validators.required]),
      desc: this._fb.control('', [Validators.required]),
      skills: this._fb.array(['UI/UX and Design', 'Web Developement', 'UI/UX and Design', 'Web Developement', 'No of Question'], [Validators.maxLength(1)]),
      duration: this._fb.control('', [Validators.required])
    });
  }

  setData(response: Assessment[]) {
    this.assessments = response;
  }

  addSkills(e: any) {
    const selectedSkills: FormArray = this.formData.controls['skills'] as FormArray;
    if(e.target.value) {
      selectedSkills.push(new FormControl(e.target.value));
      e.target.value = '';
    }
  }

  removeSkill(index: number) {
    const selectedFilters: FormArray = this.formData.controls['skills'] as FormArray;
    selectedFilters.removeAt(index);
  }

  openModal() {
    this.commonService.updateModalVisibility(true);
  }

  closeModal() {
    this.commonService.updateModalVisibility(false);
  }

  toggleAssessmentOverviewVisibility() {
    this.showAssessmentOverview = !this.showAssessmentOverview;
    this.assessmentOverviewHandler.emit(this.showAssessmentOverview);
  }

  addAssessment() {
    const formValue = this.formData.value;
    const keys = Object.keys(formValue);
    const assessment = keys.reduce((obj: any, key: any) => {
      obj[key] = formValue[key];
      return obj;
    }, {});
    this.store.dispatch(addAssessment({assessment: assessment}))
  }
}
