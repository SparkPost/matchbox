/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Pagination component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20no%20margins&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );

    // Add data-id attribute
    cy.get('label > input').invoke('attr', 'data-id', 'toggle-input');
  });

  it('Changes pages!', () => {
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
  });
});
