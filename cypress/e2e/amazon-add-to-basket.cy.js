describe('Amazon product – add to basket flow', () => {
    it('declines cookies, selects option, and adds item to basket', () => {
      cy.visit('https://www.amazon.co.uk/KeySmart-Compatible-Keychain-Keyholder-Organizer/dp/B0BNLV872G');
  
      // 1. Decline cookies
      cy.get('#sp-cc-rejectall-link', { timeout: 10000 }).click({ force: true });
  
    
      cy.get('li[class*="swatchAvailable"]', { timeout: 10000 }).first().click({ force: true });
      cy.get('input#add-to-cart-button', { timeout: 15000 })
        .scrollIntoView()
        .should('be.visible')
        .click();
  
      cy.contains('Added to Basket', { timeout: 10000 }).should('exist');
    });
  });
  
  
  
  
  
  
  
  