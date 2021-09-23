describe('ActionList component', () => {
  it('renders correctly', () => {
    cy.visit('/iframe.html?path=ActionList__Actions-as-links-buttons-or-checkboxes&source=false');
    cy.percySnapshot();
  });
});
