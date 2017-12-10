import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BidirectmapstructInvoiceModule } from './invoice/invoice.module';
import { BidirectmapstructInvoiceLineModule } from './invoice-line/invoice-line.module';
import { BidirectmapstructContactModule } from './contact/contact.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BidirectmapstructInvoiceModule,
        BidirectmapstructInvoiceLineModule,
        BidirectmapstructContactModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BidirectmapstructEntityModule {}
