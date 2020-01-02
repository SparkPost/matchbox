/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Popover component', () => {

  beforeEach(() => {
    cy.visit('/iframe.html?selectedKind=Overlays%7CPopover&selectedStory=with%20a%20controlled%20open%20state');
  });

  it('should open when clicking the trigger', () => {
    cy.get('button').first().click();
    cy.get('[data-id="popover-content"]').should('be.visible');
  });

  describe('when opened', () => {
    beforeEach(() => {
      cy.get('button').first().click();
    });

    it('should close when clicking outside the popover', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('body').click(100, 300);
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });

    it('should close when pressing the escape key', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('body').type('{esc}');
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });

    it('should close when pressing a close button', () => {
      cy.get('[data-id="popover-content"]').should('be.visible');
      cy.get('[data-id="close-button"]').click();
      cy.get('[data-id="popover-content"]').should('not.be.visible');
    });
  });
});
