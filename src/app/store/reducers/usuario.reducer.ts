import * as fromUsuario from '../actions/usuario.actions';

export interface UsuarioState {
    user: any;
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

        default:
            return state;

    }


}
