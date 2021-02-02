describe('The Checkbox component', () => {
  it('focuses on the `<input/>` element when clicking on the `<label>`', () => {
    cy.visit('/iframe.html?id=form-checkbox--basic-checkbox');
    cy.get('label').click();
    cy.get('input').should('have.focus');
    cy.get('[aria-invalid="false"]').should('exist');
  });

  it('renders with an error correctly', () => {
    cy.visit('/iframe.html?id=form-checkbox--with-error-and-required');
    cy.get('[aria-invalid="true"]').should('exist');
    cy.findAllByText("I'm an error").should('exist');
  });
});
