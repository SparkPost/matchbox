/// <reference types="Cypress" />

describe('usePrefersColorScheme hook', () => {
  const visit = dark => {
    cy.visit('/iframe.html?path=/story/utility-usepreferscolorscheme--example-usage', {
      onBeforeLoad(window) {
        cy.stub(window, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({
            matches: dark,
          });
      },
    });
  };
  beforeEach(() => {
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should return dark if dark preference set', () => {
    visit(true);

    cy.contains('dark').should('exist');
  });

  it('should return light if dark preference not set', () => {
    visit(false);

    cy.contains('light').should('exist');
  });
});
