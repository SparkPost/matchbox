/// <reference types="Cypress" />

describe('Layout', () => {
  it('should render non-mobile layout', () => {
    cy.viewport(1500, 500);
    cy.visit('/iframe.html?path=/story/layout-layout--annotated-example');
    cy.get('[data-id="annotated-section"]').should('have.css', 'width', '345px');
    cy.get('[data-id="detail-section"]').should('have.css', 'width', '1035px');
  });

  it('should render mobile layout', () => {
    cy.viewport(500, 500);
    cy.visit('/iframe.html?path=/story/layout-layout--annotated-example');
    cy.get('[data-id="annotated-section"]').should('have.css', 'width', '404px');
    cy.get('[data-id="detail-section"]').should('have.css', 'width', '404px');
  });
});
