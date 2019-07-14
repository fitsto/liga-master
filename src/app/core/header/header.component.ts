import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { OpenLoginRegister, OpenMenu, CloseMenu } from '../../store/actions/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  loginRegister() {
    this.store.dispatch(new OpenLoginRegister());
    this.store.dispatch(new CloseMenu());
  }

  openMenu() {
    this.store.dispatch(new OpenMenu());
  }

  closeMenu() {
    this.store.dispatch(new CloseMenu());
  }
}
