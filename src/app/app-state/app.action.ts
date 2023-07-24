import { createAction, props } from "@ngrx/store";
import { Assessment } from "./app.state";


export const addAssessment = createAction (
  '[Assessment] Add Assessment',
  props<{assessment: Assessment}>()
);

export const updateAssessment = createAction (
  '[Assessment] Update Assessment',
  props<{assessment: Assessment}>()
);

export const deleteAssessment = createAction (
  '[Assessment] Delete Assessment',
  props<{assessment: Assessment}>()
);
