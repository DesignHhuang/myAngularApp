import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromQuote from './quote.reducer';
import * as fromAuth from './auth.reducer';
import { Auth } from '../domain';
import { ActionReducer, ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';

export interface State {
    auth: Auth;
    quote: fromQuote.State;
};

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    quote: fromQuote.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];

export const getAuthState = (state: State) => state.auth;
export const getQuoteState = (state: State) => state.quote;
export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);

