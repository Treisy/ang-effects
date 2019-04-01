import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as usersActions from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  usersList: User[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('users')
      .subscribe( users => {
        this.usersList = users.users;
      })

    this.store.dispatch( new usersActions.LoadUsers() );
  }

}
