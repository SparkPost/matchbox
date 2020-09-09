/// <reference types="Cypress" />

describe('The ListBox component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Form%7CListBox&selectedStory=Basic%20Listbox&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );
  });

  it('opens the listbox when clicking on the `<label>`', () => {
    cy.get('label').click();

    cy.contains('Option 2').should('be.visible');
  });
});
