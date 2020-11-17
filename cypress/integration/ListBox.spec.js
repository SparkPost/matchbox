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

  it('changes focus when navigating with up and down arrows', () => {
    cy.get('label').click();

    cy.get('[data-id="open-listbox"]').trigger('keydown', {
      key: 'ArrowUp',
      keycode: 38,
      shiftKey: false,
    });

    cy.focused().should('have.text', 'Alpha');

    cy.get('[data-id="open-listbox"]').trigger('keydown', {
      key: 'ArrowDown',
      keycode: 40,
      shiftKey: false,
    });

    cy.get('[data-id="open-listbox"]').trigger('keydown', {
      key: 'ArrowDown',
      keycode: 40,
      shiftKey: false,
    });

    cy.focused().should('have.text', 'Charlie');
  });

  it('tabs through properly without opening', () => {
    cy.wait(100);
    cy.get('body').tab();
    cy.focused().should('have.attr', 'id', 'listbox-1');
    cy.focused().tab();
    cy.focused().should('have.text', 'end focus test');
  });

  it('tabs through properly while open', () => {
    cy.get('label').click();
    cy.get('body').tab();
    cy.focused().should('have.text', 'Bravo');
    cy.focused().tab();
    cy.focused().should('have.text', 'end focus test');
  });

  it('opens the menu when focused and closed with keyboard arrows', () => {
    cy.wait(100);
    cy.get('body').tab();
    cy.focused().trigger('keydown', {
      key: 'ArrowDown',
      keycode: 40,
      shiftKey: false,
    });
    cy.contains('Alpha').should('be.visible');
  });

  it('selects item on click and returns focus to button', () => {
    cy.get('label').click();
    cy.get('button')
      .eq(3)
      .click();
    cy.wait(100);
    cy.focused().should('have.text', 'Charlie');
  });
});
