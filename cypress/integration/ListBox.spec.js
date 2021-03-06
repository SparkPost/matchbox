describe('The ListBox component', () => {
  describe('interactions', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=ListBox__printable-characters&source=false');
    });

    it('opens the listbox when clicking on the `<label>`', () => {
      cy.get('label').click();
      cy.contains('Alpha').should('be.visible');
    });

    it('searches options when typing', () => {
      cy.get('label').click();

      cy.get('[data-id="open-listbox"]').trigger('keydown', {
        key: 'a',
        keyCode: 65,
        shiftKey: false,
      });
    });

    it('selects focused option when clicking enter key', () => {
      cy.get('label').click();

      cy.get('[data-id="open-listbox"]').trigger('keydown', {
        key: 'a',
        keyCode: 65,
        shiftKey: false,
      });

      cy.get('[data-id="open-listbox"]').trigger('keydown', {
        key: 'Enter',
        keycode: 13,
        shiftKey: false,
      });

      cy.contains('Alpha').should('be.visible');
    });

    it('changes focus when navigating with up and down arrows', () => {
      cy.get('label').click();

      cy.get('[data-id="open-listbox"]').trigger('keydown', {
        key: 'ArrowUp',
        keycode: 38,
        shiftKey: false,
      });

      cy.focused().should('have.text', 'Alpha');

      cy.get('[data-id="open-listbox"]').trigger('keydown', {
        key: 'ArrowDown',
        keycode: 40,
        shiftKey: false,
      });

      cy.get('[data-id="open-listbox"]').trigger('keydown', {
        key: 'ArrowDown',
        keycode: 40,
        shiftKey: false,
      });

      cy.focused().should('have.text', 'Charlie');
    });

    it('tabs through properly without opening', () => {
      cy.wait(100);
      cy.get('body').tab();
      cy.focused().should('have.attr', 'id', 'listbox-1');
      cy.focused().tab();
      cy.focused().should('have.text', 'end focus test');
    });

    it('tabs through properly while open', () => {
      cy.get('label').click();
      cy.get('body').tab();
      cy.focused().should('have.text', 'Bravo');
      cy.focused().tab();
      cy.focused().should('have.text', 'end focus test');
    });

    it('opens the menu when focused and closed with keyboard arrows', () => {
      cy.wait(100);
      cy.get('body').tab();
      cy.focused().trigger('keydown', {
        key: 'ArrowDown',
        keycode: 40,
        shiftKey: false,
      });
      cy.contains('Alpha').should('be.visible');
    });

    it('selects item on click and returns focus to button', () => {
      cy.get('label').click();
      cy.get('button')
        .eq(3)
        .click();
      cy.wait(100);
      cy.focused().should('have.text', 'Charlie');
      cy.get('[name="listbox-test"]').should('have.value', 'charlie');
      cy.get('[aria-invalid="false"]').should('exist');
      cy.get('[data-id="error-message"]').should('not.exist');
    });
  });

  describe('with an error', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?path=ListBox__help-text-and-error&source=false');
    });

    it('renders correctly', () => {
      cy.get('[aria-invalid="true"]').should('exist');
      cy.get('[data-id="error-message"]').should('exist');
      cy.findAllByText('You must select an option').should('exist');
    });
  });
});
