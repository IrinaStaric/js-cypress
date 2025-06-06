describe('Amazon product search', () => {
    it('performs a product search and checks results are displayed', () => {
      cy.visit('https://www.amazon.co.uk');
      cy.get('#twotabsearchtextbox').type('KeySmart Air{enter}');
      cy.get('.s-main-slot').should('exist');
    });
  });
  
  
  
  