import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOAD_USERS = '[Users] Load users';
export const LOAD_USERS_FAIL = '[Users] Load users Fail';
export const LOAD_USERS_SUCCESS = '[Users] Load users Success';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor( public payload: any ) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor( public users: User[] ) {}
}

export type usersActions =  LoadUsers |
                            LoadUsersFail |
                            LoadUsersSuccess;
