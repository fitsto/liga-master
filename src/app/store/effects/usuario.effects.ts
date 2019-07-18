import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { map, exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public authService: AuthService
    ) {}

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usuarioActions.CREAR_USUARIO),
            exhaustMap((action: any) => {
                const email = action.form.email;
                const password = action.form.password;
                const nombre = action.form.nombre;
                console.log(email, password);
                return  this.authService.crearUsuario(email, password, nombre).pipe(
                    map( (user: any) => {
                        return new usuarioActions.CrearUsuarioSuccess({
                            uid: user.uid,
                            email: user.email,
                            nombre: user.nombre
                        });
                    }),
                    catchError(error => of( new usuarioActions.CrearUsuarioFail(error)))
                  );
                }
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usuarioActions.CARGAR_USUARIO),
            exhaustMap((action: any) => {
                const email = action.form.email;
                const password = action.form.password;
                console.log(email, password);
                return  this.authService.login(email, password).pipe(
                    map( (user: any) => {
                        return new usuarioActions.CargarUsuarioSuccess({
                            uid: user.uid,
                            email: user.email,
                            nombre: user.nombre
                        });
                    }),
                    catchError(error => of( new usuarioActions.CargarUsuarioFail(error)))
                  );
                }
            )
        )
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usuarioActions.CERRAR_SESION_USUARIO),
            exhaustMap(() => {
                return  this.authService.logout().pipe(
                    map( (user: any) => {
                        return new usuarioActions.CerrarSesionUsuario();
                    })
                  );
                }
            )
        )
    );
}
