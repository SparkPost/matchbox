/// <reference types="Cypress" />

describe('The ListBox component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Form%7CListBox&selectedStory=Printable%20Character&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );
  });

  it('opens the listbox when clicking on the `<label>`', () => {
    cy.get('label').click();

    cy.contains('Alpha').should('be.visible');
  });

  it('searches options when typing', () => {
    cy.get('label').click();

    cy.get('[data-id="open-listbox"]').trigger('keydown', {
      key: 'a',
      keyCode: 65,
      shiftKey: false,
    });
  });

  it('selects focused option when clicking enter key', () => {
    cy.get('label').click();

    cy.get('[data-id="open-listbox"]').trigger('keydown', {
      key: 'a',
      keyCode: 65,
      shiftKey: false,
    });

    cy.get('[data-id="open-listbox"]').trigger('keydown', {
      key: 'Enter',
      keycode: 13,
      shiftKey: false,
    });

    cy.contains('Alpha').should('be.visible');
  });
});
