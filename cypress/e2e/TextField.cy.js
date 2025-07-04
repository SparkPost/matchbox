describe('The TextField component', () => {
  it('focuses on the `<input/>` element when clicking on the `<label>`', () => {
    cy.visit('/iframe.html?path=TextField__basic-usage&source=false');
    cy.get('label').click();
    cy.get('input').should('have.focus');
    cy.get('[data-id="error-message"]').should('not.exist');
    cy.get('[aria-invalid="false"]').should('exist');
  });

  it('renders with an error correctly', () => {
    cy.visit('/iframe.html?path=TextField__help-text-and-error&source=false');
    cy.get('[aria-invalid="true"]').should('exist');
    cy.get('[data-id="error-message"]').should('exist');
    cy.findByText('You forgot an ID!').should('exist');
  });
});
