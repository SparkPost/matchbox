/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe('The Slider component', () => {

  beforeEach(() => {
    // Setting viewport dimensions to avoid side effects
    cy.viewport(1000, 660);
  });

  describe('when enabled', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?selectedKind=Form%7CSlider&selectedStory=basic%20slider');
    });

    it('should update the sliders value when clicking on the track', () => {
      // Wait until slider has fully rendered with dimensions
      cy.waitUntil(() => cy.get('[data-id="slider-test"]').then(el => {
        return el[0].style.left === '470px';
      }));
      cy.get('[data-id="slider-wrapper"]').trigger('mousedown', { button: 0, pageX: 200 });
      cy.get('[data-id="slider-wrapper"]').trigger('mouseup');
      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '109')
    });
  
    it('should increase in value when using the right and up key', () => {
      cy.get('[data-id="slider-test"]').focus();
      cy.get('[data-id="slider-test"]')
        .trigger('keydown', {
          key: 'ArrowRight',
          keyCode: 39,
          shiftKey: false
        });
      cy.get('[data-id="slider-test"]')
        .trigger('keydown', {
          key: 'ArrowUp',
          keyCode: 38,
          shiftKey: false
        });
      
      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '127')
    });
  
    it('should decrease in value when using the left and down keys', () => {
      cy.get('[data-id="slider-test"]').focus();
      cy.get('[data-id="slider-test"]')
        .trigger('keydown', {
          key: 'ArrowLeft',
          keyCode: 37,
          shiftKey: false
        });
      cy.get('[data-id="slider-test"]')
        .trigger('keydown', {
          key: 'ArrowDown',
          keyCode: 40,
          shiftKey: false
        });
      
      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '123')
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?selectedKind=Form%7CSlider&selectedStory=disabled%20slider');
    });

    it('should not respond to clicks or keyboard interaction', () => {
      cy.get('[data-id="slider-wrapper"]').first().trigger('mousedown', { button: 0, pageX: 200});
      cy.get('[data-id="slider-wrapper"]').first().trigger('mouseup');
      cy.get('[data-id="slider-test"]').focus();
      cy.get('[data-id="slider-test"]')
        .trigger('keydown', {
          key: 'ArrowRight',
          keyCode: 39,
          shiftKey: false
        });
      cy.get('[data-id="slider-test"]').should('have.attr', 'aria-valuenow', '75')
    });

  });
});