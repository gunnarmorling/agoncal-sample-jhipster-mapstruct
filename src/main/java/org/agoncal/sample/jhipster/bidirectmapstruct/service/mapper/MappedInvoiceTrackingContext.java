package org.agoncal.sample.jhipster.bidirectmapstruct.service.mapper;

import java.util.IdentityHashMap;
import java.util.Map;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.Invoice;
import org.agoncal.sample.jhipster.bidirectmapstruct.service.dto.InvoiceDTO;
import org.mapstruct.BeforeMapping;
import org.mapstruct.Context;
import org.mapstruct.MappingTarget;

/**
 * A type to be used as {@link Context} parameter to track mapped {@code Invoice} objects.
 *
 * @author Gunnar Morling
 */
public class MappedInvoiceTrackingContext {

    private Map<Long, Invoice> invoicesById = new IdentityHashMap<>();

    public Invoice getMappedInvoiceById(Long invoiceId) {
        return invoicesById.get( invoiceId );
    }

    @BeforeMapping
    public void storeMappedInstance(InvoiceDTO source, @MappingTarget Invoice target) {
        invoicesById.put( source.getId(), target );
    }
}
