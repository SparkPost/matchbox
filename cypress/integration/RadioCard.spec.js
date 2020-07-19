/// <reference types="Cypress" />

describe('The RadioCard component', () => {
  describe('Basic', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=/story/form-radiocard--light-vertical-group');
    });

    it('selects on click', () => {
      cy.get('#id1').should('be.checked');
      cy.get('#id2').should('not.be.checked');
      cy.findAllByText('Check Me 2')
        .eq(0) // Second one is in the props table
        .click();
      cy.get('#id1').should('not.be.checked');
      cy.get('#id2').should('be.checked');
    });

    it('handle focus', () => {
      cy.wait(100);
      cy.get('body').tab();
      cy.get('#id1').should('have.focus');
      // Tabbing beyond this point does not work correctly in Cypress
      // Tab moves to the next RadioCard but it should move past the fieldset
    });

    it('handle focus on selection', () => {
      cy.get('#id2').check({ force: true });
      cy.get('#id2').should('have.focus');
      cy.get('#id3').check({ force: true });
      cy.get('#id3').should('have.focus');
    });

    // Not possible to test left/right/up/down arrow behavior
  });
});
