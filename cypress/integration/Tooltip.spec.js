/// <reference types="Cypress" />

describe('The Tooltip component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Overlays%7CTooltip&selectedStory=Default%20Style&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );
  });

  it('should open when a mouse over event triggers.', () => {
    cy.findAllByText('Hellow I am a Tooltip').should('not.be.visible');

    cy.get('button')
      .first()
      .trigger('mouseover');

    cy.findAllByText('Hellow I am a Tooltip').should('be.visible');

    cy.get('button')
      .first()
      .trigger('mouseout');
  });

  it('should open when clicking', () => {
    cy.findAllByText('Hellow I am a Tooltip').should('not.be.visible');

    cy.get('button')
      .first()
      .click();

    cy.findAllByText('Hellow I am a Tooltip').should('be.visible');
  });
});
