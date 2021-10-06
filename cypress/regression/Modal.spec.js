describe('Modal component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Modal');
    cy.get('button').first().click();
    cy.wait(500); // Wait for animation
    cy.percySnapshot('Modal - Desktop', { widths: [1280] });
  });

  it('renders legacy modal correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Legacy-Modal');
    cy.percySnapshot('Legacy Modal - Desktop', { widths: [1280] });
  });
});
