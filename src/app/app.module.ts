import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { MdSidenavModule } from '@angular/material'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MdSidenavModule,
    AppRoutingModule,
    LoginModule,
    ProjectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
