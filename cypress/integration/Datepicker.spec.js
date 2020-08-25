/// <reference types="Cypress" />

describe('The Datepicker component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/form-datepicker--basic-datepicker');
  });

  it('should render 2 months', () => {
    cy.viewport(1000, 660);
    cy.get('.DayPicker-Month').should('have.length', 2);
  });

  it('should render 1 months', () => {
    cy.viewport(400, 660);
    cy.get('.DayPicker-Month').should('have.length', 1);
  });
});
