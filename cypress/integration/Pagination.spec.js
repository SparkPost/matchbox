describe('The Pagination component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20no%20margins&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );
  });

  it('Changes pages!', () => {
    cy.get('[data-id="pagination-no-margin"]').then(elem => {
      cy.findByText(/^1/, { container: elem }).should('be.visible');

      cy.findByText(/^2/, { container: elem }).click();
      cy.findByText(/^1/, { container: elem }).click();

      cy.findByText('Next').click({ force: true });
      cy.findByText('Next').click({ force: true });
      cy.findByText('Next').click({ force: true });
      cy.findByText('Next').click({ force: true });
      cy.findByText('Next').click({ force: true });
      cy.findByText('Next').click({ force: true });

      cy.findByText(/^8/, { container: elem }).should('be.visible');
    });
  });
});

describe('The Pagination component with lots of pages and flat buttons', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20lots%20of%20pages&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );
  });

  it('Changes pages!', () => {
    cy.get('[data-id="pagination-lots-of-pages"]').then(elem => {
      cy.findByText(/^1/, { container: elem }).should('be.visible');

      // Clicks on last page, and backtracks with previous button
      cy.findByText(/^30/, { container: elem }).should('be.visible');
      cy.findByText(/^30/, { container: elem }).click();

      cy.findByText('Previous').click({ force: true });
      cy.findByText('Previous').click({ force: true });
      cy.findByText('Previous').click({ force: true });

      cy.findByText(/^26/, { container: elem }).should('be.visible');
    });
  });
});
