/// <reference types="Cypress" />

describe('The Tooltip component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/utility-useresizeobserver--example-usage');
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should measure', () => {
    cy.contains('x: 16').should('exist');
    cy.contains('y: 16').should('exist');
    cy.contains('width: 372').should('exist');
    cy.contains('height: 216').should('exist');
  });
});
