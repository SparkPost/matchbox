describe('The TextField component', () => {
  it('focuses on the `<input/>` element when clicking on the `<label>`', () => {
    cy.visit('/iframe.html?id=form-textfield--basic-textfield');
    cy.get('label').click();
    cy.get('input').should('have.focus');
    cy.get('[aria-invalid="false"]').should('exist');
  });

  it('renders with an error correctly', () => {
    cy.visit('/iframe.html?id=form-textfield--with-an-error');
    cy.get('[aria-invalid="true"]').should('exist');
    cy.findAllByText('You forgot an ID!').should('exist');
  });
});
