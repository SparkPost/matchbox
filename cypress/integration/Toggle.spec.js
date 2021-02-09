describe('The Toggle component', () => {
  describe('Basic', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=Toggle__renders-correctly&source=false');
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
      cy.visit('/iframe.html?path=Toggle__disabled&source=false');
    });

    it('Doesnt Toggle!', () => {
      cy.get('label').click();
      cy.get('[data-id="toggle-input"]').should('not.be.checked');
      cy.get('label').click();
      cy.get('[data-id="toggle-input"]').should('not.be.checked');
    });
  });
});
