describe('The Progress component', () => {
  beforeEach(() => {});

  it('should be keyboard navigable', () => {
    cy.visit('/iframe.html?path=Progress__basic-usage');
    cy.get('body').tab();
    cy.focused().should('have.text', 'Completed');
    cy.focused().tab();
    cy.focused().tab();
    cy.focused().should('have.text', 'Selected');
  });

  it('should not be keyboard navigable when disabled', () => {
    cy.visit('/iframe.html?path=Progress__disabled');
    cy.get('[tabIndex="-1"]').should('have.length', 5);
  });
});
