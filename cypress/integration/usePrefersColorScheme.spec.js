/// <reference types="Cypress" />

describe('usePrefersColorScheme hook', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/utility-usepreferscolorscheme--example-usage', {
      onBeforeLoad(win) {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({
            matches: true,
          });
      },
    });
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should set dark or light', () => {
    const DARK = '(prefers-reduced-motion: dark)';
    const LIGHT = '(prefers-reduced-motion: light)';

    if (window.matchMedia(DARK).matches) {
      cy.contains('reduce').should('exist');
    }

    if (window.matchMedia(LIGHT).matches) {
      cy.contains('no-preference').should('exist');
    }
  });
});
