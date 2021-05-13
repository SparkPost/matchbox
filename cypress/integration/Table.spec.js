describe('The Table component', () => {
  describe('system props', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=Table__system-props&source=false');
    });

    it('should handle padding overrides correctly', () => {
      cy.get('th').should('have.css', 'padding', '20px');
      cy.get('td')
        .eq(0)
        .should('have.css', 'padding', '32px');
      cy.get('td')
        .eq(1)
        .should('have.css', 'padding', '16px 20px');
      cy.get('td')
        .eq(2)
        .should('have.css', 'padding', '8px');
      cy.get('td')
        .eq(3)
        .should('have.css', 'padding', '16px 20px');
    });

    it('should pass colspan correctly', () => {
      cy.get('td')
        .eq(1)
        .should('have.attr', 'colspan', '2');
    });

    it('should set column width correctly', () => {
      cy.get('th')
        .eq(0)
        .should('have.attr', 'width', '20%');
    });
  });

  describe('SortButton', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=Table__all-table-components&source=false');
    });

    it('should render table header sorts correctly', () => {
      cy.findByRole('button', { name: 'Heading 1' }).should('exist');
      cy.findByRole('button', { name: 'Heading 2' }).should('exist');
      cy.findByRole('button', {
        name: 'Heading 3 with long title long title long title long title',
      }).should('exist');
      cy.contains('Heading 4').should('exist');
    });
  });

  describe('frozen first column', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=Table__frozen-first-column');
    });

    it('should render overflowing popovers correctly', () => {
      cy.get('table')
        .eq(1)
        .within(() => {
          cy.contains('Content').should('not.exist');
          cy.get('button')
            .eq(0)
            .should('exist');
          cy.get('button')
            .eq(0)
            .click({ force: true });
          cy.contains('Content').should('be.visible');
        });
    });

    it('should scroll correctly', () => {
      cy.contains('4').should('not.be.visible');
      cy.get('[data-id="matchbox-scroll-wrapper"]')
        .eq(0)
        .scrollTo(500, 0);

      cy.contains('4').should('be.visible');
    });
  });
});
