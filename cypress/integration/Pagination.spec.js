/// <reference types="Cypress" />

describe('The Pagination component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20no%20margins&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );
  });

  it('Changes pages!', () => {
    cy.queryByText('1').should('be.visible');

    cy.queryByText('2').click();
    cy.queryByText('1').click();

    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();

    cy.get('[data-id="pagination-no-margin"]').then((elem) => {
      cy.findByText(/^8/, { container: elem }).should('be.visible');
    });
  });
});

describe('The Pagination component with lots of pages and flat buttons', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20lots%20of%20pages%20and%20flat%20buttons&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );
  });

  it('Changes pages!', () => {
    cy.queryByText('1').should('be.visible');

    cy.get('button:last-child > svg').click();
    cy.get('button:first-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();
    cy.get('button:last-child > svg').click();

    cy.get('[data-id="pagination-flat"]').then((elem) => {
      cy.findByText(/^30/, { container: elem }).should('be.visible');
      cy.findByText(/^30/, { container: elem }).click();
    });

    cy.get('[data-id="pagination-flat"]').then((elem) => {
      cy.findByText(/^1/, { container: elem }).should('be.visible');
      cy.findByText(/^1/, { container: elem }).click();
    });
  });
});

