import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCardComponent } from './assessment-card.component';

describe('AssessmentCardComponent', () => {
  let component: AssessmentCardComponent;
  let fixture: ComponentFixture<AssessmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentCardComponent]
    });
    fixture = TestBed.createComponent(AssessmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
