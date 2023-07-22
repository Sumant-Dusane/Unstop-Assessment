import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAttemptedComponent } from './assessment-attempted.component';

describe('AssessmentAttemptedComponent', () => {
  let component: AssessmentAttemptedComponent;
  let fixture: ComponentFixture<AssessmentAttemptedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentAttemptedComponent]
    });
    fixture = TestBed.createComponent(AssessmentAttemptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
