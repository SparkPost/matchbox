describe('Page, Layout, Columns', () => {
  it('should render non-mobile layout', () => {
    cy.viewport(1500, 800);
    cy.visit('/iframe.html?path=Visual-Regression__Page-Layout-Columns');
    cy.percySnapshot('Page, Layout, Columns', { widths: [1280] });
  });

  it('should render mobile layout', () => {
    cy.viewport(500, 800);
    cy.visit('/iframe.html?path=Visual-Regression__Page-Layout-Columns');
    cy.percySnapshot('Page, Layout, Columns - mobile', { widths: [500] });
  });
});
