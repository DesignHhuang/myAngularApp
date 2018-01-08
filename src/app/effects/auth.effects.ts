import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services';
import * as actions from '../actions/auth.action';

@Injectable()
export class AuthEffects {

    @Effect()
    login$ = this.actions$.ofType(actions.ActionTypes.LOGIN).pipe(
        map(toPayload),
        switchMap((val: { email: string, password: string }) => this.authService.login(val.email, val.password).pipe(
            map(auth => new actions.LoginSuccessAction(auth)),
            catchError(err => of(new actions.LoginFailAction({
                status: 501,
                message: err.message,
                exception: err.stack,
                path: '/login',
                timestamp: new Date()
            })))
        ))
    )

    @Effect()
    register$ = this.actions$.ofType(actions.ActionTypes.REGISTER).pipe(
        map(toPayload),
        switchMap((val) => this.authService
            .register(val).pipe(
            map(auth => new actions.RegisterSuccessAction(auth)),
            catchError(err => of(new actions.RegisterFailAction(err)))
            )
        )
    )

    @Effect({ dispatch: false })
    navigateHome$ = this.actions$
        .ofType(actions.ActionTypes.LOGIN_SUCCESS)
        .map(() => this.router.navigate(['/project']));


    @Effect({ dispatch: false })
    registerAndHome$ = this.actions$
        .ofType(actions.ActionTypes.REGISTER_SUCCESS)
        .map(() => this.router.navigate(['/project']));

    @Effect({ dispatch: false })
    logout$ = this.actions$
        .ofType(actions.ActionTypes.LOGOUT)
        .map(() => this.router.navigate(['/']));

    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}






