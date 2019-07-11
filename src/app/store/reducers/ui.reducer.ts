import * as fromUI from '../actions/ui.actions';

export interface State {
    isLoading: boolean;
    loginRegister: boolean;
}

const initState: State = {
    isLoading: false,
    loginRegister: false
};

export function uiReducer(state = initState, action: fromUI.acciones): State {

    switch (action.type) {
        case fromUI.ACTIVAR_LOADING:
            return {
                ...initState,
                isLoading: true
            };

        case fromUI.DESACTIVAR_LOADING:
            return {
                ...initState,
                isLoading: false
            };

        case fromUI.OPEN_LOGIN_REGISTER:
            return {
                ...initState,
                loginRegister: true
            };

        case fromUI.CLOSE_LOGIN_REGISTER:
            return {
                ...initState,
                loginRegister: false
            };

        default:
            return state;
    }
}
