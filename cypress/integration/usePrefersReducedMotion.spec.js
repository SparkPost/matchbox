describe('usePrefersReducedMotion hook', () => {
  it('should set no-preference', () => {
    cy.visit('/iframe.html?path=usePrefersReducedMotion__example-usage&source=false');
    cy.contains('no-preference').should('exist');
  });
});
