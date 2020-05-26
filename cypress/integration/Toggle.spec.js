/// <reference types="Cypress" />

describe('The Toggle component', () => {
  describe('Basic', () => {
    beforeEach(() => {
      cy.visit(
        '/iframe.html?selectedKind=Action%7CToggle&selectedStory=basic%20toggle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
      );
    });

    it('Toggles!', () => {
      cy.get('[data-id="toggle-input"]').should('not.be.checked');
      cy.get('label').click();
      cy.get('[data-id="toggle-input"]').should('be.checked');
      cy.get('[data-id="toggle-input"]').uncheck({ force: true });
      cy.get('[data-id="toggle-input"]').should('not.be.checked');
    });
  });

  describe('Disabled', () => {
    beforeEach(() => {
      cy.visit(
        '/iframe.html?selectedKind=Action%7CToggle&selectedStory=disabled%20toggle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
      );
    });

    it('Doesnt Toggle!', () => {
      cy.get('label').click();
      cy.get('[data-id="toggle-input"]').should('not.be.checked');
      cy.get('label').click();
      cy.get('[data-id="toggle-input"]').should('not.be.checked');
    });
  });
});
