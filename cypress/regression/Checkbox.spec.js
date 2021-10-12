describe('Checkbox component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Checkbox');
    cy.get('#id1').eq(0).click({ force: true });
    cy.get('#child1').eq(0).click({ force: true });
    cy.wait(500);
    cy.percySnapshot('Checkbox', { widths: [1280] });
  });
});
