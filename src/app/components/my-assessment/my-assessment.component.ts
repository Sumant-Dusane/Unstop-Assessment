import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-my-assessment',
  templateUrl: './my-assessment.component.html',
  styleUrls: ['./my-assessment.component.scss']
})
export class MyAssessmentComponent {
  showOverview: boolean;

  constructor(private commonService: CommonService) {
    if(!commonService.isMobile) {
      this.showOverview = true
    }
  }

  handleOverviewVisibility(e: any) {
    this.showOverview = e;
  }
}
