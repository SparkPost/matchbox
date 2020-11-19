/// <reference types="Cypress" />

describe('usePrefersReducedMotion hook', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/utility-useprefersreducedmotion--example-usage');
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should set no-preference or reduce', () => {
    const REDUCE = '(prefers-reduced-motion: reduce)';
    const NO_PREFERENCE = '(prefers-reduced-motion: no-preference)';

    if (window.matchMedia(REDUCE).matches) {
      cy.contains('reduce').should('exist');
    }

    if (window.matchMedia(NO_PREFERENCE).matches) {
      cy.contains('no-preference').should('exist');
    }
  });
});
