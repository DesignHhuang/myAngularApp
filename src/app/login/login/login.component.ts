import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../domain/quote.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/qutoe.action';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    quote$: Observable<Quote>;
    constructor(
        private fb: FormBuilder,
        private quoteService$: QuoteService,
        private store$: Store<fromRoot.State>,
    ) {
        this.quote$ = this.store$.select(fromRoot.getQuote);
        /* this.quoteService$.getQuote().subscribe(q => this.store$.dispatch(new actions.QUOTE_SUCCESS(q))); */
        this.store$.dispatch(new actions.QUOTE(null));
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
            password: ['wp123456', Validators.required]
        })
    }

    onSubmit({ value, valid }, e: Event) {
        e.preventDefault();
        console.log(JSON.stringify(value));
        console.log(JSON.stringify(valid));
    }

}
