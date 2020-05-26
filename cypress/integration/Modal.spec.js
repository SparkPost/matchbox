/// <reference types="Cypress" />

describe('The Modal component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Overlays%7CModal&selectedStory=Toggle%20Example&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );

    cy.get('[data-id="open-modal"]').click();
  });

  it('opens when clicking the "Open modal" button', () => {
    cy.contains('Are you sure you want to delete your template?').should('be.visible');
  });

  it('closes when clicking the "Close" button', () => {
    cy.get('[data-id="modal-close"]').click();

    cy.contains('Are you sure you want to delete your template?').should('not.be.visible');
  });

  it('closes when using the escape key', () => {
    cy.get('[role="dialog"]').type('{esc}');

    cy.contains('Are you sure you want to delete your template?').should('not.be.visible');
  });

  it('closes when clicking outside the modal', () => {
    cy.get('[role="dialog"]').click({ force: true, x: -100, y: -100 });

    cy.contains('Are you sure you want to delete your template?').should('not.be.visible');
  });

  it('traps focus within the modal when rendered', () => {
    // Wait for transition animation
    cy.wait(300);

    // This is equivalent to tabbing when entering the window, so should handle the tab trap appropriately
    cy.get('body').tab();
    cy.focused().should('have.attr', 'data-id', 'modal-close');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-id', 'delete-button');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-id', 'cancel-button');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-id', 'modal-close');
  });
});
