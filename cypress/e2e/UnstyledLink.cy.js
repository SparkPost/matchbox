describe('The UnstyledLink component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=UnstyledLink__text-props&source=false');
  });

  it('correctly styles with system props', () => {
    cy.get('a')
      .eq(0)
      .should('have.css', 'color', 'rgb(164, 105, 255)');
    cy.get('a')
      .eq(0)
      .should('have.css', 'margin-right', '16px');
    cy.get('a')
      .eq(1)
      .should('have.css', 'color', 'rgb(0, 159, 106)');
  });
});
