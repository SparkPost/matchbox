describe('Drawer component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Drawer');
    cy.get('button').first().click();
    cy.wait(500); // Wait for animation
    cy.percySnapshot('Drawer');
  });
});
