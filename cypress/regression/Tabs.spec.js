describe('Tabs component', () => {
  it('renders correctly at full width', () => {
    cy.viewport(1280, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Tabs');
    cy.get('button').eq(1).click();
    cy.percySnapshot('Tabs - Desktop', { widths: [1280] });
  });

  it('renders correctly at mobile width', () => {
    cy.viewport(375, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Tabs');
    cy.percySnapshot('Tabs - Mobile', { widths: [375] });
  });
});
