describe('Modal component', () => {
  it('renders correctly at full width', () => {
    cy.viewport(1280, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Modal');
    cy.get('button').first().click();
    cy.wait(500); // Wait for animation
    cy.percySnapshot('Modal - Desktop', { widths: [1280] });
  });

  it('renders correctly at mobile width', () => {
    cy.viewport(375, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Modal');
    cy.get('button').first().click();
    cy.wait(500); // Wait for animation
    cy.percySnapshot('Modal - Mobile', { widths: [375] });
  });

  it('renders legacy modal correctly at full width', () => {
    cy.viewport(1280, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Legacy-Modal');
    cy.percySnapshot('Legacy Modal - Desktop', { widths: [1280] });
  });

  it('renders legacy modal correctly at mobile width', () => {
    cy.viewport(375, 375);
    cy.visit('/iframe.html?path=Visual-Regression__Legacy-Modal');
    cy.percySnapshot('Legacy Modal - Mobile', { widths: [375] });
  });
});
