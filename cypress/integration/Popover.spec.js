/// <reference types="Cypress" />

describe('Controlled Popover component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/overlays-popover--controlled-open-state');
  });

  it('should open when clicking the trigger', () => {
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
      cy.get('body').click(100, 300);
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });

    it('should close when pressing the escape key', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('body').type('{esc}');
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });

    it('should close when pressing a close button', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('[data-id="close-button"]').click();
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });
  });
});

describe('Uncontrolled Popover with Actionlist', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=/story/overlays-popover--with-an-action-list');
  });

  it('should open when clicking the trigger', () => {
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
    cy.focused().tab();
    cy.focused().should('have.text', 'Edit');
    cy.focused().tab();
    cy.focused().should('have.text', 'Delete');
  });

  it('should close when clicking outside the popover', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.get('body').click(100, 300);
    cy.get('[data-id="popover-content"]').should('not.be.visible');
  });

  it('should close when pressing the escape key', () => {
    cy.contains('More Actions').click();
    cy.get('[data-id="popover-content"]').should('be.visible');
    cy.get('body').type('{esc}');
    cy.get('[data-id="popover-content"]').should('not.be.visible');
  });
});
