import { Action } from '@ngrx/store';
import { Quote } from '../domain/quote.model';

export enum QuoteActionTypes {
    QUOTE = '[Quote] Quote',
    QUOTE_SUCCESS = '[Quote] Quote Success',
    QUOTE_FAIL = '[Quote] Quote Fail',
}

export class QUOTE implements Action {
    readonly type = QuoteActionTypes.QUOTE;

    constructor(public payload: any) { }
}

export class QUOTE_SUCCESS implements Action {
    readonly type = QuoteActionTypes.QUOTE_SUCCESS;

    constructor(public payload: Quote) { }
}

export class QUOTE_FAIL implements Action {
    readonly type = QuoteActionTypes.QUOTE_FAIL;

    constructor(public payload: string) { }
}

export type QuoteActions =
    | QUOTE
    | QUOTE_SUCCESS
    | QUOTE_FAIL;


