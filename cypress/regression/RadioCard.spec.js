describe('RadioCard component', () => {
  it('renders correctly - desktop', () => {
    cy.visit('/iframe.html?path=Visual-Regression__RadioCard');
    cy.get('#id1').eq(0).click({ force: true });
    cy.wait(500);
    cy.percySnapshot('RadioCard - Desktop', { widths: [1280] });
  });
  it('renders correctly - mobile', () => {
    cy.viewport(375, 375);
    cy.visit('/iframe.html?path=Visual-Regression__RadioCard');
    cy.get('#id1').eq(0).click({ force: true });
    cy.wait(500);
    cy.percySnapshot('RadioCard - Mobile', { widths: [375] });
  });
});
