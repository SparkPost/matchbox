describe('The Tooltip component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=Tooltip__default&source=false');
  });

  it('should open when a mouse over event triggers.', () => {
    cy.findAllByText('Hellow I am a Tooltip')
      .eq(1)
      .should('not.to.visible');

    cy.get('button')
      .first()
      .trigger('mouseover');

    cy.findAllByText('Hellow I am a Tooltip')
      .eq(1)
      .should('be.visible');

    cy.get('button')
      .first()
      .trigger('mouseout');
  });

  it('should open when clicking', () => {
    cy.findAllByText('Hellow I am a Tooltip')
      .eq(1)
      .should('not.be.visible');

    cy.get('button')
      .first()
      .click();

    cy.findAllByText('Hellow I am a Tooltip')
      .eq(1)
      .should('be.visible');
  });

  it('should open when focusing', () => {
    cy.findAllByText('Hellow I am a Tooltip')
      .eq(1)
      .should('not.be.visible');

    cy.get('button')
      .first()
      .focus();

    cy.findAllByText('Hellow I am a Tooltip')
      .eq(1)
      .should('be.visible');
  });
});
