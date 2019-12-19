/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('The Pagination component', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?selectedKind=Navigation%7CPagination&selectedStory=with%20no%20margins&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );
  });

  it('Changes pages!', async() => {
    cy.queryByText('1').should('exist');
    cy.queryByText('2').should('exist');
    cy.queryByText('2').click();
    cy.findAllByRole('button').then((elements) => {
	  console.log(elements);

      elements.forEach((el) => {
        el.queryByText('3');
      });
      //   cy.queryByText(elements, '3');
    });

    const buttons = await cy.findAllByRole('button');
    console.log(buttons);
  	// expect(buttons).to.have.lengthOf(3);

    // cy.findAllByRole();
    // const buttons = cy.findAllBy('button').then(() => {
    //   buttons.queryByText('3').should('exist');
    // });

    // cy.get('button').within(() => {
    //   cy.findByText('3').should('exist');
    // });

  });
});

describe('The Pagination component', () => {
  beforeEach(() => {
    cy.visit(
      '?selectedKind=Navigation%7CPagination&selectedStory=with%20lots%20of%20pages%20and%20flat%20buttons&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel'
    );
  });

  it('Changes pages!', () => {
  });
});
