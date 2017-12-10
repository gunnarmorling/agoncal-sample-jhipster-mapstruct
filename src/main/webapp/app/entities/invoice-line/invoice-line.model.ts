import { BaseEntity } from './../../shared';

export class InvoiceLine implements BaseEntity {
    constructor(
        public id?: number,
        public description?: string,
        public quantity?: number,
        public unitCost?: number,
        public subTotal?: number,
        public invoiceId?: number,
    ) {
    }
}
