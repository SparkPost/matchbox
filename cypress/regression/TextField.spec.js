describe('TextField component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__TextField');
    // Overriding width here because we don't need to check responsiveness
    cy.findAllByText('Option 1').last().click();
    cy.percySnapshot('TextField', { widths: [1280] });
  });
});
