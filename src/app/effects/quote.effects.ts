import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { QuoteService } from '../services/quote.service';
import * as actions from '../actions/qutoe.action';
import { Quote } from '../domain/quote.model';

@Injectable()
export class QuoteEffects {
    @Effect()
    quote$: Observable<Action> = this.actions$
        .ofType(actions.QuoteActionTypes.QUOTE)
        .map(toPayload)
        .switchMap(() => this.quoteService
            .getQuote()
            .map((quote: Quote) => new actions.QUOTE_SUCCESS(quote))
            .catch(err => of(new actions.QUOTE_FAIL(JSON.stringify(err))))
        );

    constructor(private actions$: Actions, private quoteService: QuoteService) { }
}