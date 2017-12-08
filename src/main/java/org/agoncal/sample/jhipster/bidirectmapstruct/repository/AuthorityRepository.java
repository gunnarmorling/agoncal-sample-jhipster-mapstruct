package org.agoncal.sample.jhipster.bidirectmapstruct.repository;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
