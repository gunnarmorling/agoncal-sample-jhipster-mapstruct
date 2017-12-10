package org.agoncal.sample.jhipster.bidirectmapstruct.repository;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.Contact;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Contact entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
