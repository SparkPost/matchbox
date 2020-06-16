/// <reference types="Cypress" />

describe('The Button component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/action-button--toggling-loading');
  });

  it('should properly replace content when loading', () => {
    cy.get('button span').should('have.attr', 'aria-hidden', 'false');
    cy.get('button').should('not.be.disabled');
    cy.get('button').click();
    cy.get('[data-id="loading-spinner').should('be.visible');
    cy.get('[data-id="loading-spinner').should('have.text', 'Loading');
    cy.get('button span').should('have.attr', 'aria-hidden', 'true');
    cy.get('button').should('be.disabled');
  });
});
