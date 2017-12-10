import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { InvoiceLine } from './invoice-line.model';
import { InvoiceLinePopupService } from './invoice-line-popup.service';
import { InvoiceLineService } from './invoice-line.service';
import { Invoice, InvoiceService } from '../invoice';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-invoice-line-dialog',
    templateUrl: './invoice-line-dialog.component.html'
})
export class InvoiceLineDialogComponent implements OnInit {

    invoiceLine: InvoiceLine;
    isSaving: boolean;

    invoices: Invoice[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private invoiceLineService: InvoiceLineService,
        private invoiceService: InvoiceService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.invoiceService.query()
            .subscribe((res: ResponseWrapper) => { this.invoices = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.invoiceLine.id !== undefined) {
            this.subscribeToSaveResponse(
                this.invoiceLineService.update(this.invoiceLine));
        } else {
            this.subscribeToSaveResponse(
                this.invoiceLineService.create(this.invoiceLine));
        }
    }

    private subscribeToSaveResponse(result: Observable<InvoiceLine>) {
        result.subscribe((res: InvoiceLine) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: InvoiceLine) {
        this.eventManager.broadcast({ name: 'invoiceLineListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackInvoiceById(index: number, item: Invoice) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-invoice-line-popup',
    template: ''
})
export class InvoiceLinePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private invoiceLinePopupService: InvoiceLinePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.invoiceLinePopupService
                    .open(InvoiceLineDialogComponent as Component, params['id']);
            } else {
                this.invoiceLinePopupService
                    .open(InvoiceLineDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
