describe('Compare HTTP and HTTPS responses', () => {
    const httpsUrl = 'https://jsonplaceholder.typicode.com/';
    const httpUrl = 'http://api.open-notify.org/iss-now.json'; 
  
    it('checks that HTTPS responds successfully', () => {
      cy.request(httpsUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('checks that HTTP URL responds (non-secure)', () => {
      cy.request(httpUrl).then((response) => {
        expect(response.status).to.be.oneOf([200, 301, 302]);
      });
    });
  });
  
  
  