import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usersActions from '../actions';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';


@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    public usersService: UserService
  ) {}

  @Effect({ dispatch: false})
  loadUsers$ = this.actions$.pipe(
    ofType(usersActions.LOAD_USERS),
    switchMap( () => {
      return this.usersService.getUsers()
        .pipe(
          map( users => new usersActions.LoadUsersSuccess(users)),
          catchError( error => of(new usersActions.LoadUsersFail(error)))
        );
    })
  );
}
