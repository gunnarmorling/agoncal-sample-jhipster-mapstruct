import { BaseEntity } from './../../shared';

export class Invoice implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public number?: string,
        public vatRate?: number,
        public terms?: string,
        public lines?: BaseEntity[],
        public responsibles?: BaseEntity[],
    ) {
    }
}
