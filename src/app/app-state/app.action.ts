import { createAction, props } from "@ngrx/store";
import { Assessment } from "./app.state";


export const addAssessment = createAction (
  '[Assessment] Add Assessment',
  props<{assessment: Assessment}>()
);
