import { Action } from '@ngrx/store';
import { Auth, Err, User } from '../domain';

export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAIL = '[Auth] Login Fail',
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register Success',
    REGISTER_FAIL = '[Auth] Register Fail',
    LOGOUT = '[Auth] Logout'
};

export class LoginAction implements Action {
    type = ActionTypes.LOGIN;

    constructor(public payload: { email: string, password: string }) {
    }
}

export class LoginSuccessAction implements Action {
    type = ActionTypes.LOGIN_SUCCESS;

    constructor(public payload: Auth) {
    }
}

export class LoginFailAction implements Action {
    type = ActionTypes.LOGIN_FAIL;

    constructor(public payload: Err) {
    }
}

export class RegisterAction implements Action {
    type = ActionTypes.REGISTER;

    constructor(public payload: User) {
    }
}

export class RegisterSuccessAction implements Action {
    type = ActionTypes.REGISTER_SUCCESS;

    constructor(public payload: Auth) {
    }
}

export class RegisterFailAction implements Action {
    type = ActionTypes.REGISTER_FAIL;

    constructor(public payload: Err) {
    }
}

export class LogoutAction implements Action {
    type = ActionTypes.LOGOUT;

    constructor(public payload: Auth) {
    }
}

export type Actions
    = LoginAction
    | LoginSuccessAction
    | LoginFailAction
    | RegisterAction
    | RegisterSuccessAction
    | RegisterFailAction
    | LogoutAction;
