import { ActionReducerMap } from '@ngrx/store';

import * as reducers from './reducers';

export interface AppState {
    ui: reducers.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.uiReducer
};
