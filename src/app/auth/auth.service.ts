import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { of, Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { User } from './user.model';
import { CrearUsuario, CrearUsuarioSuccess, CrearUsuarioFail, CargarUsuario, CargarUsuarioSuccess } from '../store/actions/usuario.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription = new Subscription();
  usuario: User;

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private store: Store<AppState>
  ) { }

  crearUsuario(email: string, password: string, nombre: string) {

    const UsuarioObservable = new Observable(observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( resp => {
        const user: User = {
          uid: resp.user.uid,
          nombre,
          email: resp.user.email,
          role: 'user'
        };
        console.log(user);
        this.afDB.doc(`usuarios/${ user.uid }`)
            .set( user )
            .then( () => {
              observer.next(user);
            })
            .catch(error => {
              observer.error(error);
            });
      })
      .catch( error => {
        observer.error(error);
      });
    });

    return UsuarioObservable;
  }

  login( email: string, password: string ) {

    const UsuarioObservable = new Observable(observer => {

    this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then( resp => {
          const uid = resp.user.uid;

          this.afDB.doc(`usuarios/${ uid }`)
            .get()
            .toPromise()
            .then((user: any) => {
              observer.next(user._document.value());
            })
            .catch(error => {
              console.error(error);
              observer.error(error);
            });
        })
        .catch( error => {
          console.error(error);
          observer.error(error);
        });
      });

    return UsuarioObservable;
  }

  logout() {
    const UsuarioObservable = new Observable(observer => {
      this.afAuth.auth.signOut()
      .then(() => observer.next())
      .catch( error => {
        console.error(error);
        observer.error(error);
      });
    });

    return UsuarioObservable;
  }

  initAuthListener() {

    this.afAuth.authState.subscribe( (fbUser: firebase.User) => {

      if ( fbUser ) {

        this.userSubscription = this.afDB.doc(`usuarios/${ fbUser.uid }`).valueChanges()
                .subscribe( (usuarioObj: any) => {

                  const newUser = new User( usuarioObj );
                  this.store.dispatch( new CargarUsuarioSuccess( newUser ) );
                  this.usuario = newUser;
                });

      } else {

        this.usuario = null;
        this.userSubscription.unsubscribe();

      }

    });

  }
}
