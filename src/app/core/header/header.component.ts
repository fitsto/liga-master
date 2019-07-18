import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { User } from '../../auth/user.model';
import {
  OpenLoginRegister,
  OpenMenu,
  CloseMenu,
  CerrarSesionUsuario
} from '../../store/actions/index';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UsuarioState } from 'src/app/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: User;
  constructor(private store: Store<AppState>, public authService: AuthService) { }

  ngOnInit() {
    this.authService.initAuthListener();
    this.store.select<UsuarioState>('user')
      .subscribe(resp => this.usuario = resp.user);
  }

  loginRegister(evt: any) {
    evt.preventDefault();
    this.store.dispatch(new OpenLoginRegister());
    this.store.dispatch(new CloseMenu());
  }

  openMenu() {
    this.store.dispatch(new OpenMenu());
  }

  closeMenu() {
    this.store.dispatch(new CloseMenu());
  }

  logout(evt: any) {
    evt.preventDefault();
    this.store.dispatch(new CerrarSesionUsuario());
  }

  miCuenta(evt: any) {
    evt.preventDefault();
  }
}
