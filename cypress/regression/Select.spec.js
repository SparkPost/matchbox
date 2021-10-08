describe('Select component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Select');
    cy.percySnapshot('Select', { widths: [1280] });
  });
});
