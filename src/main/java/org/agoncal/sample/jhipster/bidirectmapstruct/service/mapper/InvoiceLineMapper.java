package org.agoncal.sample.jhipster.bidirectmapstruct.service.mapper;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.Invoice;
import org.agoncal.sample.jhipster.bidirectmapstruct.domain.InvoiceLine;
import org.agoncal.sample.jhipster.bidirectmapstruct.service.dto.InvoiceLineDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Mapper for the entity InvoiceLine and its DTO InvoiceLineDTO.
 */
@Mapper(componentModel = "spring")
public interface InvoiceLineMapper {

    @Mapping(source = "invoice.id", target = "invoiceId")
    @Mapping(source = "invoice.number", target = "invoiceNumber")
    InvoiceLineDTO toDto(InvoiceLine invoiceLine);

    @Mapping(source = "invoiceId", target = "invoice")
    InvoiceLine toEntity(InvoiceLineDTO invoiceLineDTO);

    default Invoice fromId(Long id) {
        if (id == null) {
            return null;
        }
        Invoice invoice = new Invoice();
        invoice.setId(id);
        return invoice;
    }
}
