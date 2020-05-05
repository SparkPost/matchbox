/// <reference types="Cypress" />

describe('The Tabs component', () => {
  describe('when not overflowing', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=/story/navigation-tabs--example-tabs');
      // Setting viewport dimensions to avoid side effects
      cy.viewport(1400, 600);
    });

    it('should handle tab click', () => {
      cy.get('button')
        .eq(1)
        .click();
      cy.get('[aria-selected="true"]').should('have.text', 'More Details');
    });

    it('should handle keyboard navigation', () => {
      cy.get('button')
        .first()
        .click();
      cy.focused().tab();
      cy.focused().should('have.text', 'More Details');
      cy.focused().tab();
      cy.focused().should('have.text', 'Example with long text');
    });
  });

  describe('when overflowing', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=/story/navigation-tabs--example-tabs');
      cy.viewport(800, 600);

      // Tests are flakey because they require layout changes
      // Remove if these become a problem
      cy.wait(400);
    });

    it('should handle actionlist click', () => {
      cy.get('[data-id="tab-options-button"]').click();
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('[data-id="popover-content"] button')
        .eq(1)
        .click();
      cy.get('[aria-selected="true"]')
        .first()
        .should('have.text', 'Example with long text');
    });

    it('should toggle when activator is clicked', () => {
      cy.get('[data-id="tab-options-button"]').click();
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('[data-id="tab-options-button"]').click();
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });

    it('should handle keyboard navigation', () => {
      cy.get('[data-id="tab-options-button"]').click();
      cy.focused().should('have.text', 'More Options');
      cy.focused().tab();
      cy.focused().should('have.text', 'More Details');
    });
  });
});
