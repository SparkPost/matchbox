describe('useInView Hook { once: true } ', () => {
  beforeEach(() => {
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
    cy.visit('/iframe.html?path=useInView__example-usage&source=false');
  });

  it('should default to not in view', () => {
    cy.contains('In View: False').should('exist');
  });

  it('should only trigger inView once when scrolled into view', () => {
    cy.wait(500);
    cy.scrollTo(0, 2100);
    cy.contains('In View: True').should('exist');
    cy.scrollTo(0, 0);
    cy.contains('In View: True').should('exist');
  });
});

describe('useInView Hook { once: false } ', () => {
  beforeEach(() => {
    // Setting viewport dimensions to avoid side effects
    cy.viewport(500, 500);
    cy.visit('/iframe.html?path=useInView__once-set-to-false&source=false');
  });

  it('should default to not in view', () => {
    cy.contains('In View: False').should('exist');
  });

  it('should be true when element is in view and false when element is not in view', () => {
    cy.wait(500);
    cy.scrollTo(0, 2100);
    cy.contains('In View: True').should('exist');
    cy.scrollTo(0, 0);
    cy.contains('In View: False').should('exist');
  });
});
