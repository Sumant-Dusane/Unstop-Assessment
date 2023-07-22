import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentOverviewComponent } from './assessment-overview.component';

describe('AssessmentOverviewComponent', () => {
  let component: AssessmentOverviewComponent;
  let fixture: ComponentFixture<AssessmentOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentOverviewComponent]
    });
    fixture = TestBed.createComponent(AssessmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
