package org.agoncal.sample.jhipster.bidirectmapstruct.service.dto;


import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * A DTO for the Invoice entity.
 */
public class InvoiceDTO implements Serializable {

    private Long id;

    private String title;

    @NotNull
    private String number;

    @NotNull
    private Float vatRate;

    @NotNull
    @Size(max = 32)
    private String terms;

    private Set<InvoiceLineDTO> lines = new HashSet<>();

    private Set<ContactDTO> responsibles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Float getVatRate() {
        return vatRate;
    }

    public void setVatRate(Float vatRate) {
        this.vatRate = vatRate;
    }

    public String getTerms() {
        return terms;
    }

    public void setTerms(String terms) {
        this.terms = terms;
    }

    public Set<InvoiceLineDTO> getLines() {
        return lines;
    }

    public void setLines(Set<InvoiceLineDTO> lines) {
        this.lines = lines;
    }

    public Set<ContactDTO> getResponsibles() {
        return responsibles;
    }

    public void setResponsibles(Set<ContactDTO> contacts) {
        this.responsibles = contacts;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        InvoiceDTO invoiceDTO = (InvoiceDTO) o;
        if(invoiceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), invoiceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "InvoiceDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", number='" + getNumber() + "'" +
            ", vatRate=" + getVatRate() +
            ", terms='" + getTerms() + "'" +
            "}";
    }
}
