import * as fromUsuario from '../actions/usuario.actions';
import { User } from '../../auth/user.model';

export interface UsuarioState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer( state = estadoInicial, action: fromUsuario.usuarioAcciones ): UsuarioState {


    switch ( action.type ) {

        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };

            case fromUsuario.CREAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CREAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            };

        case fromUsuario.CREAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };

        case fromUsuario.CERRAR_SESION_USUARIO:
            return {
                ...state,
                user: null
            };

        default:
            return state;

    }


}
