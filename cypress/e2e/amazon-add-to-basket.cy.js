describe('Amazon product - add to basket flow', () => {
    it('declines cookies and adds item to basket', () => {
      cy.visit('https://www.amazon.co.uk/KeySmart-Compatible-Keychain-Keyholder-Organizer/dp/B0BNLV872G');
  
      cy.get('#sp-cc-rejectall-link', { timeout: 10000 }).click({ force: true });
      cy.get('#add-to-cart-button', { timeout: 10000 }).click();
  
      cy.url().should('include', '/cart');
      
    });
  });
  
  
  
  
  