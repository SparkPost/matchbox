describe('Controlled Popover component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=Popover__controlled&source=false');
  });

  it('should open when clicking the trigger', () => {
    cy.focused().should('not.exist');
    cy.get('button')
      .first()
      .click();
    cy.get('[data-id="popover-content"]').should('be.visible');
  });

  describe('when opened', () => {
    beforeEach(() => {
      cy.get('button')
        .first()
        .click();
    });

    it('should close when clicking outside the popover', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('html').click(100, 300);
      cy.get('[data-id="popover-content"]').should('not.exist');
    });

    it('should close when pressing the escape key', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('body').type('{esc}');
      cy.get('[data-id="popover-content"]').should('not.exist');
      cy.focused().should('have.text', 'Open Me');
    });

    it('should close when pressing a close button', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('[data-id="close-button"]').click();
      cy.get('[data-id="popover-content"]').should('not.exist');
      // cy.focused().should('have.text', 'Open Me');
    });
  });
});

describe('Uncontrolled Popover with Actionlist', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=Popover__with-an-ActionList&source=false');
    cy.wait(500); // The element that handles click events requires time to calculate dimensions
  });

  it('should open when clicking the trigger', () => {
    cy.focused().should('not.exist');
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
  });

  it('should toggle open with enter key', () => {
    cy.contains('More Actions').type('{enter}');
    cy.get('[data-id="popover-content"]').should('be.visible');
  });

  it('should tab through actionlist buttons', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.focused().should('have.attr', 'tabindex', '-1');
    // Container is focused with tabindex=-1 here, not "tabbable" by cypress
    // So we reset to start at the button instead
    cy.get('body').tab();
    cy.focused().tab();
    cy.focused().should('have.text', 'Edit');
    cy.focused().tab();
    cy.focused().should('have.text', 'Delete');
  });

  it('should close when clicking outside the popover', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.get('html').click(100, 600);
    cy.get('[data-id="popover-content"]').should('not.exist');
  });

  it('should close when pressing the escape key', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.get('body').type('{esc}');
    cy.get('[data-id="popover-content"]').should('not.exist');
    cy.focused().should('have.text', 'More Actions');
  });
});
