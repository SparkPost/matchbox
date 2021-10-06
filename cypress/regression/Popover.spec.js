describe('Popover and ActionList component', () => {
  it('renders correctly', () => {
    cy.viewport(1280, 660);
    cy.visit('/iframe.html?path=Visual-Regression__Popover-and-ActionList');
    cy.findAllByText('Popover').first().click();
    cy.percySnapshot('Popover and ActionList', { widths: [1280] });
  });
});
