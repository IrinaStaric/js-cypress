describe('Fake Store API - Simulated Payment Flow', () => {
    it('creates a mock cart order with selected products', () => {
      cy.request('POST', 'https://fakestoreapi.com/carts', {
        userId: 10,
        date: '2025-06-06',
        products: [
          { productId: 1, quantity: 2 },
          { productId: 3, quantity: 1 }
        ]
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body.products).to.have.length(2);
      });
    });
  });
  