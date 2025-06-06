describe('JSONPlaceholder API - GET /posts', () => {
    it('should return a list of posts', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts')
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
          expect(response.body.length).to.be.greaterThan(0);
          expect(response.body[0]).to.have.property('title');
          expect(response.body[0]).to.have.property('body');
        });
    });
  });
  