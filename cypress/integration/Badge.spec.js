describe('The Badge component', () => {
  it('should render properly', () => {
    cy.visit('/iframe.html?path=Badge__e2e-test&source=false');
    cy.get('#test-id').should('have.text', '100');
    cy.get('#test-id-2').should('have.text', '200');
    cy.get('[data-id="test-data-id"]').should('have.text', '100');
  });

  it('should set system props properly', () => {
    cy.visit('/iframe.html?path=Badge__e2e-test&source=false');
    cy.get('#test-id').should('have.css', 'margin-right', '32px');
    cy.get('#test-id-2').should('have.css', 'margin-top', '32px');
    cy.get('#test-id-2').should('have.css', 'background-color', 'rgb(235, 240, 245)');
  });

  it('should set tabindex properly', () => {
    cy.visit('/iframe.html?path=Badge__with-a-tooltip&source=false');
    cy.get('body').tab();
    cy.focused().should('have.text', '100');
    cy.contains('I am a Tooltip').should('be.visible');
  });
});
