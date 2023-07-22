import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-assessment-attempted',
  templateUrl: './assessment-attempted.component.html',
  styleUrls: ['./assessment-attempted.component.scss']
})
export class AssessmentAttemptedComponent implements OnInit{
  createNewAssessment: boolean = false;
  skills: Array<string> = [];
  @Output() assessmentOverviewHandler = new EventEmitter<boolean>();
  showAssessmentOverview: boolean;

  constructor(private commonService: CommonService) {
    this.commonService.isModalOpened.subscribe(state => {
      this.createNewAssessment = state;
    })
  }

  ngOnInit(): void {
    this.skills = ['UI/UX and Design', 'Web Developement', 'UI/UX and Design', 'Web Developement', 'No of Question'];
  }

  addSkills(e: any) {
    if(e.target.value) {
      this.skills.push(e.target.value);
      e.target.value = '';
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
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
}
