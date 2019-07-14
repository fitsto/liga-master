import { ActionReducerMap } from '@ngrx/store';

import * as reducers from './reducers';

export interface AppState {
    ui: reducers.State;
    user: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.uiReducer,
    user: reducers.usuarioReducer
};
