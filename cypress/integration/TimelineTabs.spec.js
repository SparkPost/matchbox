describe('The TimelineTabs component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=timelinetabs--test');
    cy.get('button')
      .first()
      .click();
  });

  it('should handle arrow keys', () => {
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Tab 2');
    cy.get('body').type('{downArrow}');
    cy.get('body').type('{downArrow}');
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Tab 5');
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Tab 4');
    cy.get(`[tabindex="0"]`).should('have.text', 'Tab 4');
  });

  it('should handle loop to beginning and end with keys', () => {
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Tab 5');
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Tab 1');
  });

  it('should handle home and end keys', () => {
    cy.get('body').type('{end}');
    cy.focused().should('have.text', 'Tab 5');
    cy.get('body').type('{home}');
    cy.focused().should('have.text', 'Tab 1');
  });

  it('should handle page up and page down keys', () => {
    cy.get('body').type('{pageUp}');
    cy.focused().should('have.text', 'Tab 5');
    cy.get('body').type('{pageDown}');
    cy.focused().should('have.text', 'Tab 1');
  });

  it('should tab through past items to next element', () => {
    cy.tab();
    cy.focused().should('have.text', 'end focus test');
    cy.get(`[tabindex="0"]`).should('have.text', 'Tab 1');
  });

  it('should handle tab click', () => {
    cy.get('button')
      .eq(2)
      .click();
    cy.get('[aria-selected="true"]').should('have.text', 'Tab 3');
    cy.get(`[tabindex="0"]`).should('have.text', 'Tab 3');
    cy.get(`[tabindex="-1"]`).should('have.length', 4);
  });
});
