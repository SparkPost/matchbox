describe('ActionList component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?path=ActionList__Actions-as-links-buttons-or-checkboxes&source=false');
  });

  it('should render correctly with data-id and class name', () => {
    cy.get('.test-class').should('exist');
    cy.get('[data-id="test-data-id"]').should('exist');
  });

  it('should render Actions correctly as buttons and links', () => {
    cy.get('button').should('have.length', 2);
    cy.get('a').should('have.length', 2);
  });

  it('should handle disabled Actions correctly', () => {
    cy.get('button')
      .eq(1)
      .should('be.disabled');

    cy.get('a')
      .eq(1)
      .should('have.attr', 'tabindex', '-1');
    cy.get('a')
      .eq(1)
      .should('have.css', 'pointer-events', 'none');
  });
});
