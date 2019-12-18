/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Expandable Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?selectedKind=Layout%7CExpandable&selectedStory=with%20image%20title%20and%20subtitle&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel');
  });

  it('should toggle open/close when clicking the arrow', () => {
    cy.get('[data-id="expandable-content"]').should('be.visible');
    cy.get('[data-id="expandable-toggle"]').click();
    cy.get('[data-id="expandable-content"]').should('not.be.visible');
    cy.get('[data-id="expandable-toggle"]').click();
    cy.get('[data-id="expandable-content"]').should('be.visible');
  });

  it('should toggle open/close when hitting enter while focused', () => {
    cy.get('[data-id="expandable-toggle"]')
      .focus()
      .trigger('keydown', {
        key: 'Enter',
        keyCode: 13,
        which: 13,
        shiftKey: false
      });

    cy.wait(200);

    cy.get('[data-id="expandable-content"]').should('not.be.visible');

    cy.get('[data-id="expandable-toggle"]')
      .focus()
      .trigger('keydown', {
        key: 'Enter',
        keyCode: 13,
        which: 13,
        shiftKey: false
      });

    cy.wait(200);

    cy.get('[data-id="expandable-content"]').should('be.visible');
  });

  it('should toggle aria-expanded attribute value between true / false', () => {
    cy.get('[data-id="expandable-toggle"]').should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-id="expandable-toggle"]').click();
    cy.get('[data-id="expandable-toggle"]').should('have.attr', 'aria-expanded', 'false');
  });
})