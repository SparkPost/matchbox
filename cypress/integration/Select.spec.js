describe('The Select component', () => {
  it('focuses on the `<select/>` element when clicking on the `<label>`', () => {
    cy.visit('/iframe.html?id=form-select--basic-select');
    cy.get('label').click();
    cy.get('select').should('have.focus');
    cy.get('[data-id="error-message"]').should('not.exist');
    cy.get('[aria-invalid="false"]').should('exist');
  });

  it('renders with an error correctly', () => {
    cy.visit('/iframe.html?id=form-select--with-help-text-and-error');
    cy.get('[aria-invalid="true"]').should('exist');
    cy.get('[data-id="error-message"]').should('exist');
    cy.findAllByText('You forgot to select').should('exist');
  });
});
