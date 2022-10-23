describe('Test4', () => {
    it('Test1', () => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',{
            statusCode: 400
        }).as('mockGet')
        
        cy.request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
            
        }).then((res) => {
            cy.wait('@mockGet');
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body.date).to.be.equal('2022-06-26')
        })
        
   })
})