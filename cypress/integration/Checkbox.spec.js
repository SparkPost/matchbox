describe('The Checkbox component', () => {
  it('focuses on the `<input/>` element when clicking on the `<label>`', () => {
    cy.visit('/iframe.html?path=Checkbox__basic-usage&source=false');
    cy.get('label').click();
    cy.get('input').should('have.focus');
    cy.get('[data-id="error-message"]').should('not.exist');
    cy.get('[aria-invalid="false"]').should('exist');
  });

  it('renders with an error correctly', () => {
    cy.visit('/iframe.html?path=Checkbox__with-error-and-required&source=false');
    cy.get('[aria-invalid="true"]').should('exist');
    cy.get('[data-id="error-message"]').should('exist');
    cy.findByText("I'm an error").should('exist');
  });
});
