package org.agoncal.sample.jhipster.bidirectmapstruct.service.mapper;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.*;
import org.agoncal.sample.jhipster.bidirectmapstruct.service.dto.InvoiceDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Invoice and its DTO InvoiceDTO.
 */
@Mapper(componentModel = "spring", uses = {ContactMapper.class})
public interface InvoiceMapper extends EntityMapper<InvoiceDTO, Invoice> {

    

    @Mapping(target = "lines", ignore = true)
    Invoice toEntity(InvoiceDTO invoiceDTO);

    default Invoice fromId(Long id) {
        if (id == null) {
            return null;
        }
        Invoice invoice = new Invoice();
        invoice.setId(id);
        return invoice;
    }
}
