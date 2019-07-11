import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { OpenLoginRegisterAction } from '../../store/actions/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private stor: Store<AppState>) { }

  ngOnInit() {
  }

  loginRegister() {
    this.stor.dispatch(new OpenLoginRegisterAction());
  }
}
