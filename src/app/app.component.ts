import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { CloseLoginRegisterAction } from './store/actions/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loginRegister: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('ui')
      .subscribe(ui => {
        this.loginRegister = ui.loginRegister;
      });
  }

  closeLoginRegister() {
    this.store.dispatch(new CloseLoginRegisterAction());
  }

}
