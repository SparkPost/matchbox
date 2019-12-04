/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Toggle component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Action%7CToggle&selectedStory=basic%20toggle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );

    // Add data-id attribute
    cy.get('label > input').invoke('attr', 'data-id', 'toggle-input');
  });

  it('Toggles!', () => {
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('be.checked');
    cy.get('[data-id="toggle-input"]').uncheck({ force: true });
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
    cy.get('[data-id="toggle-input"]').check({ force: true });
    cy.get('[data-id="toggle-input"]').should('be.checked');
    cy.get('[data-id="toggle-input"]').uncheck({ force: true });
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
  });
});

/* eslint-disable no-undef */
describe('Cannot Toggle component (disabled)', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Action%7CToggle&selectedStory=disabled%20toggle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );

    // Add data-id attribute
    cy.get('label > input').invoke('attr', 'data-id', 'toggle-input');
  });

  it('Doesnt Toggle!', () => {
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
  });
});

/* eslint-disable no-undef */
describe('Compact Toggle component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Action%7CToggle&selectedStory=compact%20toggle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );

    // Add data-id attribute
    cy.get('label > input').invoke('attr', 'data-id', 'toggle-input');
  });

  it('Toggles!', () => {
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('not.be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').should('be.checked');
  });
});

/* eslint-disable no-undef */
describe('Compact Toggle component (disabled)', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Action%7CToggle&selectedStory=compact%20and%20disabled%20toggle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );

    // Add data-id attribute
    cy.get('label > input').invoke('attr', 'data-id', 'toggle-input');
  });

  it('Doesnt Toggle!', () => {
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').uncheck({ force: true });
    cy.get('[data-id="toggle-input"]').should('be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').uncheck({ force: true });
    cy.get('[data-id="toggle-input"]').should('be.checked');
    cy.get('label').click();
    cy.get('[data-id="toggle-input"]').uncheck({ force: true });
    cy.get('[data-id="toggle-input"]').should('be.checked');
  });
});
