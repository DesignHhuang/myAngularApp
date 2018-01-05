import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { Neo4jd3Module } from './neo4jd3/neo4jd3.module';
import { TaskModule } from './task/task.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { AppEffectsModule } from './effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        LoginModule,
        ProjectModule,
        Neo4jd3Module,
        TaskModule,
        SharedModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        AppEffectsModule,
        /* RouterModule.forRoot([]), */
        !environment.production
            ? StoreDevtoolsModule.instrument({
                maxAge: 50,
            })
            : [],
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
