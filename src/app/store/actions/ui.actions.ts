import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[UI Loading] Cargando...';
export const DESACTIVAR_LOADING = '[UI Loading] fin de carga...';
export const OPEN_LOGIN_REGISTER = '[UI Login Register] open';
export const CLOSE_LOGIN_REGISTER = '[UI Login Register] close';

export const OPEN_MENU = '[UI Menu] open';
export const CLOSE_MENU = '[UI Menu] close';

export class ActivarLoading implements Action {
    readonly type = ACTIVAR_LOADING;
}

export class DesactivarLoading implements Action {
    readonly type = DESACTIVAR_LOADING;
}

export class OpenLoginRegister implements Action {
    readonly type = OPEN_LOGIN_REGISTER;
}

export class CloseLoginRegister implements Action {
    readonly type = CLOSE_LOGIN_REGISTER;
}

export class OpenMenu implements Action {
    readonly type = OPEN_MENU;
}

export class CloseMenu implements Action {
    readonly type = CLOSE_MENU;
}

export type uiAcciones =  ActivarLoading |
                        DesactivarLoading |
                        OpenLoginRegister |
                        CloseLoginRegister |
                        OpenMenu |
                        CloseMenu;
