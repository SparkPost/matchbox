describe('CheckboxCard component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__CheckboxCard');
    cy.percySnapshot('CheckboxCard', { widths: [1280] });
  });
});
