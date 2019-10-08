/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Select component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?selectedKind=Form%7CSelect&selectedStory=Basic%20Select&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel');
  });

  it('focuses on the `<select/>` element when clicking on the `<label>`', () => {
    cy.get('label').click();

    cy.get('select').should('have.focus');
  });
});
