import * as quoteAction from '../actions/qutoe.action';
import { Quote } from '../domain/quote.model';
import { QuoteActions, QuoteActionTypes } from '../actions/qutoe.action'

export interface State {
    quote: Quote;
};

export const initialState: State = {
    quote: {
        "cn": "我突然就觉得自己像个华丽的木偶,演尽了所有的悲欢离合,可是背上总是有无数闪亮的银色丝线,操纵我哪怕一举手一投足。",
        "en": "I suddenly feel myself like a doll,acting all kinds of joys and sorrows.There are lots of shining silvery thread on my back,controlling all my action.",
        "pic": "/assets/img/quotes/0.jpg"
    }
};

export function reducer(state = initialState, action: QuoteActions): State {
    switch (action.type) {
        case QuoteActionTypes.QUOTE_SUCCESS: {
            return {
                ...state, quote: action.payload
            };
        }

        case QuoteActionTypes.QUOTE_FAIL:
        default: {
            return state;
        }
    }
}

export const getQuote = (state: State) => state.quote;