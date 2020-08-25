/// <reference types="Cypress" />

describe('The Datepicker component', () => {
  it('should render 1 months', () => {
    cy.viewport(300, 660);
    cy.visit('/iframe.html?path=/story/form-datepicker--basic-datepicker');
    cy.get('.DayPicker-Month').should('have.length', 1);
  });

  it('should render 2 months', () => {
    cy.viewport(1000, 660);
    cy.visit('/iframe.html?path=/story/form-datepicker--basic-datepicker');
    cy.get('.DayPicker-Month').should('have.length', 2);
  });
});
