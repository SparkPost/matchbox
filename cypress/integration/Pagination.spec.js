/// <reference types="Cypress" />

function getElement(elements, valueToFind) {
  let elem;
  const keys = Object.keys(elements);
  keys.forEach((key) => {
    const value = parseInt(elements[key].innerText, 10);
    // eslint-disable-next-line use-isnan
    if (parseInt(key, 10) !== NaN && parseInt(key, 10) >= 0 && value >= 0 && value === valueToFind) {
      elem = elements[key];
    }
  });

  return elem;
}

describe('The Pagination component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20no%20margins&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );
  });

  it('Changes pages!', () => {
    cy.queryByText('1').should('exist');
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

    cy.get('button').then((elements) => {
      cy.findByText(/^8/, { container: elements[3] }).should('exist');
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
    cy.queryByText('1').should('exist');
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

    cy.get('button').then((elements) => {
	  const elem = getElement(elements, 30);
      cy.findByText(/^30/, { container: elem }).should('exist');
      cy.findByText(/^30/, { container: elem }).click();
    });

    cy.get('button').then((elements) => {
      const elem = getElement(elements, 1);
      cy.findByText(/^1/, { container: elem }).should('exist');
      cy.findByText(/^1/, { container: elem }).click();
    });
  });
});
