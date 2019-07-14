import { Action } from '@ngrx/store';

export const CREAR_USUARIO = '[USUARIO] Crear Usuario';
export const CREAR_USUARIO_FAIL = '[USUARIO] Crear Usuario FAIL';
export const CREAR_USUARIO_SUCCESS = '[USUARIO] Crear Usuario SUCCESS';

export const CARGAR_USUARIO = '[USUARIO] Cargar Usuario';
export const CARGAR_USUARIO_FAIL = '[USUARIO] Cargar Usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] Cargar Usuario SUCCESS';

export class CrearUsuario implements Action {
    readonly type = CREAR_USUARIO;

    constructor( public form: any ) { }
}

export class CrearUsuarioFail implements Action {
    readonly type = CREAR_USUARIO_FAIL;

    constructor( public payload: any ) {}
}

export class CrearUsuarioSuccess implements Action {
    readonly type = CREAR_USUARIO_SUCCESS;

    constructor( public usuario: any ) {}
}

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor( public form: any ) { }
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor( public payload: any ) {}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor( public usuario: any ) {}
}



export type usuarioAcciones =  CrearUsuario |
                        CrearUsuarioFail |
                        CrearUsuarioSuccess |
                        CargarUsuario |
                        CargarUsuarioFail |
                        CargarUsuarioSuccess;
