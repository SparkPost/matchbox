describe('The Table component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=Table__system-props&source=false');
  });

  it('should handle padding overrides correctly', () => {
    cy.get('th').should('have.css', 'padding', '20px');
    cy.get('td')
      .eq(0)
      .should('have.css', 'padding', '32px');
    cy.get('td')
      .eq(1)
      .should('have.css', 'padding', '16px 20px');
    cy.get('td')
      .eq(2)
      .should('have.css', 'padding', '8px');
    cy.get('td')
      .eq(3)
      .should('have.css', 'padding', '16px 20px');
  });

  it('should pass colspan correctly', () => {
    cy.get('td')
      .eq(1)
      .should('have.attr', 'colspan', '2');
  });
});
