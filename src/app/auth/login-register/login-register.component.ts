import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CloseLoginRegisterAction } from '../../store/actions/index';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  stopPropagation(evt: any) {
    evt.stopPropagation();
  }

  closeLoginRegister() {
    this.store.dispatch(new CloseLoginRegisterAction());
  }

  onSubmitRegister(values) {
    console.log(values);
  }
}
