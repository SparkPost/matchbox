describe('Drawer component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Drawer-Visual-Regression__renders-properly');
    cy.get('button').first().click();
    cy.wait(500); // Wait for animation
    cy.percySnapshot();
  });
});
