describe('Test', () => {

    beforeEach(() => {
        cy.visit('http://demo.automationtesting.in/Register.html')
    })

    it('Test1', () => {
        cy.get('[ng-model="EmailAdress"]').type("teste");
        cy.xpath('//*[@id="basicBootstrapForm"]/div[2]/div/textarea').type("teste");     
        cy.get('#Skills').select("APIs"); 
        cy.get('label.checks')
            .contains("Cricket")  // text inside the selector
            .should("be.visible");
        cy.get('input[value=Cricket]').check();

    })
})