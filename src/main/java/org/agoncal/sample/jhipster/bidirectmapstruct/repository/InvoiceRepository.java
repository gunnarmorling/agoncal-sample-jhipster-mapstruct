package org.agoncal.sample.jhipster.bidirectmapstruct.repository;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.Invoice;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Invoice entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    @Query("select distinct invoice from Invoice invoice left join fetch invoice.responsibles left join fetch invoice.lines")
    List<Invoice> findAllWithEagerRelationships();

    @Query("select invoice from Invoice invoice left join fetch invoice.responsibles where invoice.id =:id")
    Invoice findOneWithEagerRelationships(@Param("id") Long id);

}
