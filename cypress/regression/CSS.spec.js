describe('Matchbox CSS', () => {
  it('renders correctly - desktop', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Matchbox-Css');
    cy.wait(500);
    cy.percySnapshot('Matchbox CSS - Desktop', { widths: [1280] });
  });
  it('renders correctly - mobile', () => {
    cy.viewport(375, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Matchbox-Css');
    cy.wait(500);
    cy.percySnapshot('Matchbox CSS - Mobile', { widths: [375] });
  });
});
