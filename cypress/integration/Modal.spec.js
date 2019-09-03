/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Modal component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?selectedKind=Overlays%7CModal&selectedStory=Toggle%20Example&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel');
  });

  it('opens when clicking the "Open modal" button', () => {
    cy.get('[data-test="open-modal"]').click();

    cy.contains('Are you sure you want to delete your template?').should('be.visible');
  });

  it('traps focus within the modal when rendered', () => {
    cy.get('[data-test="open-modal"]').click();

    // Wait for transition animation
    cy.wait(300);

    // This is equivalent to tabbing when entering the window, so should handle the tab trap appropriately
    cy.get('body').tab();
    cy.focused().should('have.attr', 'data-test', 'modal-close');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-test', 'delete-button');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-test', 'cancel-button');
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-test', 'modal-close');
  });
});
