describe('Mock Amazon API - Product List Simulation', () => {
    it('should return a mocked list of products', () => {
      cy.request('https://fakestoreapi.com/products')
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
          expect(response.body[0]).to.have.property('title');
          expect(response.body[0]).to.have.property('price');
        });
    });
  });
  