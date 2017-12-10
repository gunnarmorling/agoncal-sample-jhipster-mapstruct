/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { BidirectmapstructTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { InvoiceLineDetailComponent } from '../../../../../../main/webapp/app/entities/invoice-line/invoice-line-detail.component';
import { InvoiceLineService } from '../../../../../../main/webapp/app/entities/invoice-line/invoice-line.service';
import { InvoiceLine } from '../../../../../../main/webapp/app/entities/invoice-line/invoice-line.model';

describe('Component Tests', () => {

    describe('InvoiceLine Management Detail Component', () => {
        let comp: InvoiceLineDetailComponent;
        let fixture: ComponentFixture<InvoiceLineDetailComponent>;
        let service: InvoiceLineService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BidirectmapstructTestModule],
                declarations: [InvoiceLineDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    InvoiceLineService,
                    JhiEventManager
                ]
            }).overrideTemplate(InvoiceLineDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InvoiceLineDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InvoiceLineService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new InvoiceLine(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.invoiceLine).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
