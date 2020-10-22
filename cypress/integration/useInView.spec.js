/// <reference types="Cypress" />

describe('useInView Hook { once: true } ', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/utility-useinview--example-usage');
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should default to not in view', () => {
    cy.contains('In View: False').should('exist');
  });

  it('should only trigger inView once when scrolled into view', () => {
    cy.scrollTo(0, 2100);
    cy.contains('In View: True').should('exist');
    cy.scrollTo(0, 0);
    cy.contains('In View: True').should('exist');
  });
});

describe('useInView Hook { once: false } ', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/utility-useinview--once-false');
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should default to not in view', () => {
    cy.contains('In View: False').should('exist');
  });

  it('should be true when element is in view and false when element is not in view', () => {
    cy.scrollTo(0, 2100);
    cy.contains('In View: True').should('exist');
    cy.scrollTo(0, 0);
    cy.contains('In View: False').should('exist');
  });
});
