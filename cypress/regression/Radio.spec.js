describe('Radio component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Radio');
    cy.get('#id1').eq(0).click({ force: true });
    cy.wait(500);
    cy.percySnapshot('Radio', { widths: [1280] });
  });
});
