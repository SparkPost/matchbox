/// <reference types="Cypress" />

describe('The Slider component', () => {
  beforeEach(() => {
    // Setting viewport dimensions to avoid side effects
    cy.viewport(1000, 660);
  });

  describe('when enabled', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?selectedKind=Form%7CSlider&selectedStory=basic%20slider');
    });

    // Test relies on timing for layout side effects
    // Remove if flakey
    it('should update the sliders value when clicking on the track', () => {
      cy.wait(200); // Gives slider some time for calculations

      cy.get('[data-id="slider-wrapper"]').trigger('mousedown', { button: 0, pageX: 200 });

      cy.wait(200); // Gives slider some time for calculations

      cy.get('[data-id="slider-wrapper"]').trigger('mouseup');

      // Viewport, layout, container sizing makes this too flakey to assert on a specific value
      cy.get('[data-id="slider-test"]').then(elem => {
        expect(Number(elem.attr('aria-valuenow'))).to.be.lessThan(125);
      });
    });

    it('should increase in value when using the right and up key', () => {
      cy.get('[data-id="slider-test"]').focus();
      cy.get('[data-id="slider-test"]').trigger('keydown', {
        key: 'ArrowRight',
        keyCode: 39,
        shiftKey: false,
      });
      cy.get('[data-id="slider-test"]').trigger('keydown', {
        key: 'ArrowUp',
        keyCode: 38,
        shiftKey: false,
      });

      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '127');
    });

    it('should decrease in value when using the left and down keys', () => {
      cy.get('[data-id="slider-test"]').focus();
      cy.get('[data-id="slider-test"]').trigger('keydown', {
        key: 'ArrowLeft',
        keyCode: 37,
        shiftKey: false,
      });
      cy.get('[data-id="slider-test"]').trigger('keydown', {
        key: 'ArrowDown',
        keyCode: 40,
        shiftKey: false,
      });

      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '123');
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?selectedKind=Form%7CSlider&selectedStory=disabled%20slider');
    });

    it('should not respond to clicks or keyboard interaction', () => {
      cy.get('[data-id="slider-wrapper"]')
        .first()
        .trigger('mousedown', { button: 0, pageX: 200 });
      cy.get('[data-id="slider-wrapper"]')
        .first()
        .trigger('mouseup');
      cy.get('[data-id="slider-test"]').focus();
      cy.get('[data-id="slider-test"]').trigger('keydown', {
        key: 'ArrowRight',
        keyCode: 39,
        shiftKey: false,
      });
      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '75');
    });
  });
});
