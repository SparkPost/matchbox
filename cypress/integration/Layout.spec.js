describe('Layout', () => {
  it('should render non-mobile layout', () => {
    cy.viewport(1500, 500);
    cy.visit('/iframe.html?path=Layout__annotated-example-in-page&source=false');
    cy.get('[data-id="annotated-section"]').should('have.css', 'width', '357px');
    cy.get('[data-id="detail-section"]').should('have.css', 'width', '1071px');
  });

  it('should render mobile layout', () => {
    cy.viewport(500, 500);
    cy.visit('/iframe.html?path=Layout__annotated-example-in-page&source=false');
    cy.get('[data-id="annotated-section"]').should('have.css', 'width', '452px');
    cy.get('[data-id="detail-section"]').should('have.css', 'width', '452px');
  });
});
