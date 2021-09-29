describe('Button component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Buttons-Visual-Regression__renders-properly');
    // Overriding width here because we don't need to check responsiveness
    cy.percySnapshot('Button component renders correctly', { widths: [1280] });
  });
});
