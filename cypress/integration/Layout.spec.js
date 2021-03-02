describe('Layout', () => {
  it('should render non-mobile layout', () => {
    cy.viewport(1500, 500);
    cy.visit('/iframe.html?path=Layout__annotated-example-in-page&source=false');
    cy.get('[data-id="annotated-section"]').should('have.attr', 'width', '0.3333333333333333');
    cy.get('[data-id="detail-section"]').should('have.attr', 'width', '1');
  });

  it('should render mobile layout', () => {
    cy.viewport(500, 500);
    cy.visit('/iframe.html?path=Layout__annotated-example-in-page&source=false');
    cy.get('[data-id="annotated-section"]').should('have.attr', 'width', '100%');
    cy.get('[data-id="detail-section"]').should('have.attr', 'width', '100%');
  });
});
