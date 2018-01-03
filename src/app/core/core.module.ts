import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadSvgResource } from '../utils/svg.util';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesModule } from '../services/services.module';
import 'hammerjs';
import 'rxjs/add/operator/take';
@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        BrowserAnimationsModule,
        RouterModule,
        ServicesModule.forRoot(),
        AppRoutingModule,
    ],
    declarations: [HeaderComponent, FooterComponent, SidebarComponent],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AppRoutingModule,
    ],
    providers: [
        {
            provide: 'BASE_CONFIG',
            useValue: {
                uri: 'http://localhost:3000'
            }
        }
    ],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer) {
        if (parent) {
            throw new Error('模块已经存在，不能加载！');
        }
        loadSvgResource(ir, ds);
    }
}
