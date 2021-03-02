describe('usePrefersReducedMotion hook', () => {
  const visit = reduce => {
    cy.visit('iframe.html?path=usePrefersReducedMotion__example-usage&source=false', {
      onBeforeLoad(window) {
        cy.stub(window, 'matchMedia')
          .withArgs('(prefers-reduced-motion: reduce)')
          .returns({
            matches: reduce,
          });
      },
    });
  };

  it('should return reduce if reduce preference set', () => {
    visit(true);
    cy.contains('reduce').should('exist');
  });

  it('should return no-preference if no preference is set', () => {
    visit(false);
    cy.contains('no-preference').should('exist');
  });
});
