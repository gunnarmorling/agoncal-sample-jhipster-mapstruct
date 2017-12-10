package org.agoncal.sample.jhipster.bidirectmapstruct.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


/**
 * A Invoice.
 */
@Entity
@Table(name = "invoice")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Invoice implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "jhi_number", nullable = false)
    private String number;

    @NotNull
    @Column(name = "vat_rate", nullable = false)
    private Float vatRate;

    @NotNull
    @Size(max = 32)
    @Column(name = "terms", length = 32, nullable = false)
    private String terms;

    @OneToMany(mappedBy = "invoice")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<InvoiceLine> lines = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "invoice_responsibles",
               joinColumns = @JoinColumn(name="invoices_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="responsibles_id", referencedColumnName="id"))
    private Set<Contact> responsibles = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Invoice title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNumber() {
        return number;
    }

    public Invoice number(String number) {
        this.number = number;
        return this;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Float getVatRate() {
        return vatRate;
    }

    public Invoice vatRate(Float vatRate) {
        this.vatRate = vatRate;
        return this;
    }

    public void setVatRate(Float vatRate) {
        this.vatRate = vatRate;
    }

    public String getTerms() {
        return terms;
    }

    public Invoice terms(String terms) {
        this.terms = terms;
        return this;
    }

    public void setTerms(String terms) {
        this.terms = terms;
    }

    public Set<InvoiceLine> getLines() {
        return lines;
    }

    public Invoice lines(Set<InvoiceLine> invoiceLines) {
        this.lines = invoiceLines;
        return this;
    }

    public Invoice addLines(InvoiceLine invoiceLine) {
        this.lines.add(invoiceLine);
        invoiceLine.setInvoice(this);
        return this;
    }

    public Invoice removeLines(InvoiceLine invoiceLine) {
        this.lines.remove(invoiceLine);
        invoiceLine.setInvoice(null);
        return this;
    }

    public void setLines(Set<InvoiceLine> invoiceLines) {
        this.lines = invoiceLines;
    }

    public Set<Contact> getResponsibles() {
        return responsibles;
    }

    public Invoice responsibles(Set<Contact> contacts) {
        this.responsibles = contacts;
        return this;
    }

    public Invoice addResponsibles(Contact contact) {
        this.responsibles.add(contact);
        return this;
    }

    public Invoice removeResponsibles(Contact contact) {
        this.responsibles.remove(contact);
        return this;
    }

    public void setResponsibles(Set<Contact> contacts) {
        this.responsibles = contacts;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Invoice invoice = (Invoice) o;
        if (invoice.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), invoice.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Invoice{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", number='" + getNumber() + "'" +
            ", vatRate=" + getVatRate() +
            ", terms='" + getTerms() + "'" +
            "}";
    }
}
