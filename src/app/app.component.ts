import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { CloseLoginRegister, CloseMenu } from './store/actions/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loginRegister: boolean;
  modal: boolean;
  menu: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('ui')
      .subscribe(ui => {
        this.loginRegister = ui.loginRegister;
        this.modal = ui.modal;
        this.menu = ui.menu;
      });
  }

  closeLoginRegister() {
    this.store.dispatch(new CloseLoginRegister());
  }

  closeMenu() {
    this.store.dispatch(new CloseMenu());
  }

}
