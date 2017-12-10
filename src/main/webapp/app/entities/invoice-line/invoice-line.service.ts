import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { InvoiceLine } from './invoice-line.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class InvoiceLineService {

    private resourceUrl = SERVER_API_URL + 'api/invoice-lines';

    constructor(private http: Http) { }

    create(invoiceLine: InvoiceLine): Observable<InvoiceLine> {
        const copy = this.convert(invoiceLine);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(invoiceLine: InvoiceLine): Observable<InvoiceLine> {
        const copy = this.convert(invoiceLine);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<InvoiceLine> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to InvoiceLine.
     */
    private convertItemFromServer(json: any): InvoiceLine {
        const entity: InvoiceLine = Object.assign(new InvoiceLine(), json);
        return entity;
    }

    /**
     * Convert a InvoiceLine to a JSON which can be sent to the server.
     */
    private convert(invoiceLine: InvoiceLine): InvoiceLine {
        const copy: InvoiceLine = Object.assign({}, invoiceLine);
        return copy;
    }
}
