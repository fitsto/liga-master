import * as fromUI from '../actions/ui.actions';

export interface State {
    isLoading: boolean;
    loginRegister: boolean;
    modal: boolean;
    menu: boolean;
}

const initState: State = {
    isLoading: false,
    loginRegister: false,
    modal: false,
    menu: false
};

export function uiReducer(state = initState, action: fromUI.uiAcciones): State {

    switch (action.type) {
        case fromUI.ACTIVAR_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case fromUI.DESACTIVAR_LOADING:
            return {
                ...state,
                isLoading: false
            };

        case fromUI.OPEN_LOGIN_REGISTER:
            return {
                ...state,
                loginRegister: true,
                modal: true
            };

        case fromUI.CLOSE_LOGIN_REGISTER:
            return {
                ...state,
                loginRegister: false,
                modal: false
            };

        case fromUI.OPEN_MENU:
            return {
                ...state,
                menu: true
            };

        case fromUI.CLOSE_MENU:
            return {
                ...state,
                menu: false
            };

        default:
            return state;
    }
}
