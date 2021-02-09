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
      cy.get(`[tabindex="0"]`).should('have.text', 'Details');
      cy.get(`[tabindex="-1"]`).should('have.length', 4);
    });
  });

  describe('keyboard navigation', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=/story/navigation-tabs--example-tabs');
      // Setting viewport dimensions to avoid side effects
      cy.viewport(1400, 600);
      cy.get('button')
        .first()
        .click();
    });

    it('should handle arrow keys', () => {
      cy.get('body').type('{rightArrow}');
      cy.focused().should('have.text', 'More Details');
      cy.get('body').type('{rightArrow}');
      cy.get('body').type('{rightArrow}');
      cy.get('body').type('{rightArrow}');
      cy.focused().should('have.text', 'Details');
      cy.get('body').type('{leftArrow}');
      cy.focused().should('have.text', 'Example with a component wrapper');
      cy.get(`[tabindex="0"]`).should('have.text', 'Example with a component wrapper');
    });

    it('should handle home and end keys', () => {
      cy.get('body').type('{end}');
      cy.focused().should('have.text', 'Example with a component wrapper');
      cy.get('body').type('{home}');
      cy.focused().should('have.text', 'Details');
    });

    it('should handle page up and page down keys', () => {
      cy.get('body').type('{pageUp}');
      cy.focused().should('have.text', 'Example with a component wrapper');
      cy.get('body').type('{pageDown}');
      cy.focused().should('have.text', 'Details');
    });

    it('should tab past the tabs', () => {
      cy.tab();
      cy.focused().should('have.text', 'this is only here to test focus order');
    });

    it('should correctly reset tabindex to selected tab after blurring', () => {
      cy.get('body').type('{rightArrow}');
      cy.focused().should('have.text', 'More Details');
      cy.tab();
      cy.focused().should('have.text', 'this is only here to test focus order');
      cy.get(`[tabindex="0"]`).should('have.text', 'Details');
    });
  });

  // Tests are flakey because they require layout changes
  // Remove if these become a problem
  describe.skip('when overflowing', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=/story/navigation-tabs--example-tabs');
      cy.viewport(800, 600);
      cy.wait(500);
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

    it('should focus on the menu', () => {
      cy.get('[data-id="tab-options-button"]').click();
      cy.get('[data-id="popover-focus-wrapper"]').should('have.focus');
    });
  });
});
