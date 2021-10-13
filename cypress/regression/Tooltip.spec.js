describe('Tooltip component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=Visual-Regression__Tooltip');
    cy.get('button').trigger('mouseover');
    cy.wait(500);
    cy.percySnapshot('Tooltip', { widths: [1280] });
  });
});
