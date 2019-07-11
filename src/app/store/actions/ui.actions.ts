import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[UI Loading] Cargando...';
export const DESACTIVAR_LOADING = '[UI Loading] fin de carga...';
export const OPEN_LOGIN_REGISTER = '[UI Login Register] open';
export const CLOSE_LOGIN_REGISTER = '[UI Login Register] close';

export class ActivarLoadingAction implements Action {
    readonly type = ACTIVAR_LOADING;
}

export class DesactivarLoadingAction implements Action {
    readonly type = DESACTIVAR_LOADING;
}

export class OpenLoginRegisterAction implements Action {
    readonly type = OPEN_LOGIN_REGISTER;
}

export class CloseLoginRegisterAction implements Action {
    readonly type = CLOSE_LOGIN_REGISTER;
}

export type acciones =  ActivarLoadingAction |
                        DesactivarLoadingAction |
                        OpenLoginRegisterAction |
                        CloseLoginRegisterAction;
