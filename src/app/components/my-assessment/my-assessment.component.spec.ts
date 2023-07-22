import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssessmentComponent } from './my-assessment.component';

describe('MyAssessmentComponent', () => {
  let component: MyAssessmentComponent;
  let fixture: ComponentFixture<MyAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAssessmentComponent]
    });
    fixture = TestBed.createComponent(MyAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
