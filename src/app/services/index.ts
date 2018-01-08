import { NgModule } from '@angular/core';
import { QuoteService } from './quote.service';
import { AuthService } from './auth.service';

export {
    QuoteService,
    AuthService,
}

@NgModule()
export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [
                QuoteService,
                AuthService,
            ]
        };
    }
}