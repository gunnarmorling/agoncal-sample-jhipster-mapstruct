import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { InvoiceLine } from './invoice-line.model';
import { InvoiceLineService } from './invoice-line.service';

@Component({
    selector: 'jhi-invoice-line-detail',
    templateUrl: './invoice-line-detail.component.html'
})
export class InvoiceLineDetailComponent implements OnInit, OnDestroy {

    invoiceLine: InvoiceLine;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private invoiceLineService: InvoiceLineService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInInvoiceLines();
    }

    load(id) {
        this.invoiceLineService.find(id).subscribe((invoiceLine) => {
            this.invoiceLine = invoiceLine;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInInvoiceLines() {
        this.eventSubscriber = this.eventManager.subscribe(
            'invoiceLineListModification',
            (response) => this.load(this.invoiceLine.id)
        );
    }
}
