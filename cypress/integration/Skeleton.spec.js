describe('The Skeleton component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=Skeleton__all-together&source=false');
  });

  it('not render anything visible to screen readers', () => {
    cy.get('#test').should('have.text', '');
    cy.get('[aria-hidden="true"]').should('have.length', 6);
  });
});
