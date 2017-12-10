import { BaseEntity } from './../../shared';

export class Contact implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
    ) {
    }
}
