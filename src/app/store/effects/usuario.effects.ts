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

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usuarioActions.CREAR_USUARIO),
            exhaustMap((action: any) => {
                const email = action.form.email;
                const password = action.form.password;
                const nombres = '';
                const apellidos = '';
                console.log(email, password);
                return  this.authService.crearUsuario(email, password, '', '').pipe(
                    map( (user: any) => {
                        console.log(user);
                        return new usuarioActions.CrearUsuarioSuccess({
                            uid: user.uid,
                            email: user.email
                        });
                    }),
                    catchError(error => of( new usuarioActions.CrearUsuarioFail(error)))
                  );
                }
            )
        )
    );


}
