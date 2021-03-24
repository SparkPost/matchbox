describe('Drawer component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=Drawer__example-drawer&source=false');

    cy.get('button')
      .first()
      .click();
  });

  it('opens when click on an activator', () => {
    cy.contains('Opened on the right').should('be.visible');
  });

  it('closes when using the escape key', () => {
    cy.get('body').type('{esc}');
    cy.contains('Opened on the right').should('not.exist');
  });

  it('closes when clicking outside the drawer', () => {
    cy.get('body').click(100, 300);
    cy.contains('Opened on the right').should('not.exist');
  });

  it('closes when clicking the close button', () => {
    cy.contains('Opened on the right').should('exist');
    cy.findByRole('button', { name: 'Close' }).click();
    cy.contains('Opened on the right').should('not.exist');
  });

  it('traps focus', () => {
    cy.wait(500); // waits for Drawer to enter
    cy.get('body').tab();
    cy.focused().should('have.text', 'Close');
    cy.focused().tab();
    cy.focused().should('have.text', 'Button 1');
    cy.focused().tab();
    cy.focused().should('have.text', 'Button 2');
    cy.focused().tab();
    cy.focused().should('have.text', 'Close');
  });

  it('returns focus on close', () => {
    cy.wait(500); // waits for Drawer to enter
    cy.get('body').tab();
    cy.focused().should('have.text', 'Close');
    cy.get('body').type('{esc}');
    cy.focused().should('have.text', 'On the right');
  });
});
