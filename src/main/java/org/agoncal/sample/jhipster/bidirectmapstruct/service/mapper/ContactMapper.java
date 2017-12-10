package org.agoncal.sample.jhipster.bidirectmapstruct.service.mapper;

import org.agoncal.sample.jhipster.bidirectmapstruct.domain.*;
import org.agoncal.sample.jhipster.bidirectmapstruct.service.dto.ContactDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Contact and its DTO ContactDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ContactMapper extends EntityMapper<ContactDTO, Contact> {

    

    

    default Contact fromId(Long id) {
        if (id == null) {
            return null;
        }
        Contact contact = new Contact();
        contact.setId(id);
        return contact;
    }
}
