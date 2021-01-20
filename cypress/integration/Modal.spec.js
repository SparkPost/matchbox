/// <reference types="Cypress" />

describe('The Modal component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Overlays%7CModal&selectedStory=Toggle%20Example&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );

    cy.get('[data-id="open-modal"]').click();
  });

  it('opens when clicking the "Open modal" button', () => {
    cy.contains('Modal Content').should('be.visible');
  });

  it('closes when clicking the "Close" button', () => {
    cy.get('[data-id="modal-close"]').click();

    cy.contains('Modal Content').should('not.be.visible');
  });

  it('closes when using the escape key', () => {
    cy.get('[role="dialog"] > div').type('{esc}');
    cy.contains('Modal Content').should('not.be.visible');
  });

  it('closes when clicking outside the modal', () => {
    cy.get('[role="dialog"] > div').click({ force: true, x: -100, y: -100 });
    cy.contains('Modal Content').should('not.be.visible');
  });

  it('returns focus when closing', () => {
    cy.contains('Modal Content').should('be.visible');
    cy.get('[data-id="modal-close"]').click();
    cy.focused().should('have.text', 'Open Modal');
  });

  // This test is flakey
  it.skip('traps focus within the modal when rendered', () => {
    // Wait for transition animation
    cy.wait(300);

    cy.focused().should('have.attr', 'data-id', 'modal-content-panel');

    // This is equivalent to tabbing when entering the window, so should handle the tab trap appropriately
    cy.get('body').tab();
    cy.focused().should('have.attr', 'data-id', 'modal-close');
    cy.focused().tab();
    cy.focused().should('have.text', 'Primary Button');
    cy.focused().tab();
    cy.focused().should('have.text', 'Secondary Button');
    cy.focused().tab();
    cy.focused().should('have.text', 'Tertiary Button');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-id', 'modal-close');
  });
});
