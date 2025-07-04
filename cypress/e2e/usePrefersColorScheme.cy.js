describe('usePrefersColorScheme hook', () => {
  const visit = dark => {
    cy.visit('iframe.html?path=usePrefersColorScheme__example-usage&source=false', {
      onBeforeLoad(window) {
        cy.stub(window, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({
            matches: dark,
          });
      },
    });
  };

  it('should return dark if dark preference set', () => {
    visit(true);

    cy.contains('dark').should('exist');
  });

  it('should return light if dark preference not set', () => {
    visit(false);

    cy.contains('light').should('exist');
  });
});
