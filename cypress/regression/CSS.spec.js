describe('Matchbox CSS', () => {
  it('renders correctly - desktop', () => {
    cy.visit('/iframe.html?path=Visual-Regression__CSS');
    cy.wait(500);
    cy.percySnapshot('Matchbos CSS - Desktop', { widths: [1280] });
  });
  it('renders correctly - mobile', () => {
    cy.viewport(375, 375);
    cy.visit('/iframe.html?path=Visual-Regression__CSS');
    cy.wait(500);
    cy.percySnapshot('Matchbox CSS - Mobile', { widths: [375] });
  });
});
