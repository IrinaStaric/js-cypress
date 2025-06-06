describe('Amazon product search', () => {
    it('searches for KeySmart Air and checks results', () => {
      cy.visit('https://www.amazon.co.uk');
  
      cy.get('#twotabsearchtextbox').type('KeySmart Air');
  
      cy.get('input[type="submit"][value="Go"]').first().click();
  
      cy.contains('KeySmart Air - Compact Keyholder for Airtag').should('be.visible');
    });
  });
  
  
  