import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Assessment } from "./app.state";
import * as appAction from "./app.action";


interface AppState {
  assessment: Assessment[]
}

const initialState: AppState = {
  assessment: [
    {
      id: '69',
      name: 'Test2',
      purpose: 'Purpose1',
      desc: 'Desc1',
      skills: ['Angular', 'UX', 'UI'],
      duration: '10:20:30',
    },
    {
      id: '79',
      name: 'Test1',
      purpose: 'Purpose2',
      desc: 'Desc2',
      skills: ['Angular', 'UX', 'UI'],
      duration: '10:20:30',
    },
    {
      id: '68',
      name: 'Test3',
      purpose: 'Purpose3',
      desc: 'Desc3',
      skills: ['Angular', 'UX', 'UI'],
      duration: '10:20:30',
    }
  ]
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
  }),
  on(appAction.deleteAssessment, (state, action): AppState => {
    const assessments = [...state.assessment];
    assessments.splice(assessments.indexOf(action.assessment), 1);
    console.log(assessments);
    return {
      ...state,
      assessment: assessments
    }
  }),
  on(appAction.updateAssessment, (state, action): AppState => {
    var assessment = [...state.assessment];
    const newAssessment = assessment.map(obj => (obj?.id == action.assessment.id) ? action.assessment : obj)

    return{
      ...state,
      assessment: newAssessment
    }
  })
);
