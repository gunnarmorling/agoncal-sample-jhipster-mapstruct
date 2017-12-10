package org.agoncal.sample.jhipster.bidirectmapstruct.service.mapper;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.Invoice;
import org.agoncal.sample.jhipster.bidirectmapstruct.domain.InvoiceLine;
import org.agoncal.sample.jhipster.bidirectmapstruct.service.dto.InvoiceDTO;
import org.agoncal.sample.jhipster.bidirectmapstruct.service.dto.InvoiceLineDTO;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Mapper for the entity Invoice and its DTO InvoiceDTO.
 */
@Mapper(componentModel = "spring", uses = ContactMapper.class)
public interface InvoiceMapper {

    InvoiceDTO toDto(Invoice invoice);

    Invoice toEntity(InvoiceDTO invoiceDTO, @Context MappedInvoiceTrackingContext context);

    @Mapping(source = "invoice.id", target = "invoiceId")
    @Mapping(source = "invoice.number", target = "invoiceNumber")
    InvoiceLineDTO invoiceLineToInvoiceLineDto(InvoiceLine invoiceLine);

    @Mapping(source = "invoiceId", target = "invoice")
    InvoiceLine invoiceLineDtoInvoiceLine(InvoiceLineDTO invoiceLineDTO, @Context MappedInvoiceTrackingContext context);

    default Invoice invoiceFromId(Long id, @Context MappedInvoiceTrackingContext context) {
        if (id == null) {
            return null;
        }

        return context.getMappedInvoiceById( id );
    }
}
