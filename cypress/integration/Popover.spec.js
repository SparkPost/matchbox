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
    });

    it('should focus on a focusable child when opening', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.focused().should('have.text', 'Close me');
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

  it('should close when pressing tab', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.get('body').tab();
    cy.get('[data-id="popover-content"]').should('not.be.visible');
  });

  it('should navigate through actionlist buttons with down arrow', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.focused().should('have.text', 'Edit');
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Duplicate');
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Publish');
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Delete');
    cy.get('body').type('{downArrow}');
    cy.focused().should('have.text', 'Edit');
  });

  it('should navigate through actionlist buttons with up arrow', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Delete');
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Publish');
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Duplicate');
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Edit');
    cy.get('body').type('{upArrow}');
    cy.focused().should('have.text', 'Delete');
  });

  it('should open when pressing down arrow', () => {
    cy.get('body').tab();
    cy.get('[data-id="popover-content"]').should('not.exist');
    cy.focused().should('have.text', 'More Actions');
    cy.get('body').type('{downArrow}');
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.focused().should('have.text', 'Edit');
  });

  it('should open when pressing up arrow', () => {
    cy.get('body').tab();
    cy.get('[data-id="popover-content"]').should('not.exist');
    cy.focused().should('have.text', 'More Actions');
    cy.get('body').type('{upArrow}');
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.focused().should('have.text', 'Edit');
  });

  it('should focus on the first item when opening', () => {
    cy.get('[data-id="popover-content"]').should('not.exist');
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.focused().should('have.attr', 'role', 'menuitem');
    cy.focused().should('have.text', 'Edit');
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

  it('should render the correct a11y attributes automatically', () => {
    cy.findByRole('button', { name: 'More Actions' }).should('have.attr', 'aria-haspopup', 'true');
    cy.findByRole('button', { name: 'More Actions' }).should('have.attr', 'aria-expanded', 'false');
    cy.contains('More Actions').click();
    cy.findByRole('button', { name: 'More Actions' }).should('have.attr', 'aria-expanded', 'true');
  });
});
