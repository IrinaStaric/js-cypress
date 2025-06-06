describe('Amazon product – add to basket flow', () => {
    it('declines cookies and adds item to basket', () => {
      cy.visit('https://www.amazon.co.uk/KeySmart-Compatible-Keychain-Keyholder-Organizer/dp/B0BNLV872G');
  
      cy.wait(4000);
  
      // Decline cookies
      cy.get('#sp-cc-rejectall-link', { timeout: 10000 }).click({ force: true });
  
      cy.get('input[name="submit.add-to-cart"]', { timeout: 15000 })
        .scrollIntoView()
        .should('be.visible')
        .click();
  
      cy.contains('Added to basket', { timeout: 10000 }).should('exist');
    });
  });
  
  
  
  
  
  
  