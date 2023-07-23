import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Assessment } from "./app.state";
import * as appAction from "./app.action";


interface AppState {
  assessment: Assessment[]
}

const initialState: AppState = {
  assessment: []
}

const appFeatureSelector = createFeatureSelector<AppState>('app-state');

export const assessmentSelector  = createSelector(
  appFeatureSelector,
  (state) => state?.assessment
);

export const appReducer = createReducer (
  initialState,
  on(appAction.addAssessment, (state, action): AppState => {
    return {
      ...state,
      assessment: [...state?.assessment, action?.assessment]
    }
  })
);
