import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  crearUsuario(email: string, password: string, nombres: string, apellidos: string) {

    const UsuarioObservable = new Observable(observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( resp => observer.next(resp.user))
      .catch( error => observer.error(error));
    });

    return UsuarioObservable;
  }
}
