import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { InvoiceLine } from './invoice-line.model';
import { InvoiceLineService } from './invoice-line.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-invoice-line',
    templateUrl: './invoice-line.component.html'
})
export class InvoiceLineComponent implements OnInit, OnDestroy {
invoiceLines: InvoiceLine[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private invoiceLineService: InvoiceLineService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.invoiceLineService.query().subscribe(
            (res: ResponseWrapper) => {
                this.invoiceLines = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInInvoiceLines();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: InvoiceLine) {
        return item.id;
    }
    registerChangeInInvoiceLines() {
        this.eventSubscriber = this.eventManager.subscribe('invoiceLineListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
