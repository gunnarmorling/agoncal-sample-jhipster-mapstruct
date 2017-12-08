import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { BidirectmapstructSharedModule, UserRouteAccessService } from './shared';
import { BidirectmapstructAppRoutingModule} from './app-routing.module';
import { BidirectmapstructHomeModule } from './home/home.module';
import { BidirectmapstructAdminModule } from './admin/admin.module';
import { BidirectmapstructAccountModule } from './account/account.module';
import { BidirectmapstructEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BidirectmapstructAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BidirectmapstructSharedModule,
        BidirectmapstructHomeModule,
        BidirectmapstructAdminModule,
        BidirectmapstructAccountModule,
        BidirectmapstructEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BidirectmapstructAppModule {}
