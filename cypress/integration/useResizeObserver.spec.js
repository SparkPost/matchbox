describe('useResizeObserver', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=useResizeObserver__example-usage&source=false');
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
  });

  it('should measure', () => {
    cy.contains('x: 16').should('exist');
    cy.contains('y: 16').should('exist');
    cy.contains('width: 420').should('exist');
    cy.contains('height: 216').should('exist');
  });
});
