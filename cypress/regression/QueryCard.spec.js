describe('QueryCard component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__QueryCard');
    cy.percySnapshot('QueryCard', { widths: [1280] });
  });
});
