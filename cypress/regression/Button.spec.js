describe('Button component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Buttons');
    // Overriding width here because we don't need to check responsiveness
    cy.percySnapshot('Button', { widths: [1280] });
  });
});
