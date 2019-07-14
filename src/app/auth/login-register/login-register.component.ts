import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CloseLoginRegister } from '../../store/actions/index';
import { AppState } from '../../store/app.reducer';
import { CrearUsuario } from '../../store/actions/usuario.actions';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  stopPropagation(evt: any) {
    evt.stopPropagation();
  }

  closeLoginRegister() {
    this.store.dispatch(new CloseLoginRegister());
  }

  onSubmitRegister(form) {
    this.store.dispatch( new CrearUsuario(form));
  }
}
