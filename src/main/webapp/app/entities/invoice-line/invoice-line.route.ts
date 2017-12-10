import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { InvoiceLineComponent } from './invoice-line.component';
import { InvoiceLineDetailComponent } from './invoice-line-detail.component';
import { InvoiceLinePopupComponent } from './invoice-line-dialog.component';
import { InvoiceLineDeletePopupComponent } from './invoice-line-delete-dialog.component';

export const invoiceLineRoute: Routes = [
    {
        path: 'invoice-line',
        component: InvoiceLineComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InvoiceLines'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'invoice-line/:id',
        component: InvoiceLineDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InvoiceLines'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const invoiceLinePopupRoute: Routes = [
    {
        path: 'invoice-line-new',
        component: InvoiceLinePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InvoiceLines'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'invoice-line/:id/edit',
        component: InvoiceLinePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InvoiceLines'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'invoice-line/:id/delete',
        component: InvoiceLineDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InvoiceLines'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
