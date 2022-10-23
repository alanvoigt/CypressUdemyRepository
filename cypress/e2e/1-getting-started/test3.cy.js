describe('Test3', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    //    it('Test1', () => {
     //      cy.get('[ng-model="EmailAdress"]').type("teste");
      //     cy.get('#Skills').select("APIs"); 
     //  })

    const emailforeach = require('../../fixtures/email.json');
    emailforeach.forEach(email => {
        it('Test2 ' + email.emails, () => {
            cy.email(email.emails);
            cy.skills("APIs"); 
        })
    })

    emailforeach.forEach(email => {
        it('Test3 ' + email.emails, () => {
            cy.email(email.emails);
            cy.skills("APIs"); 
        })
    })

    emailforeach.forEach(email => {
        it('Test4 ' + email.emails, () => {
            cy.email(email.emails);
            cy.skills("APIs"); 
        })
    })

    emailforeach.forEach(email => {
        it('Test5 ' + email.emails, () => {
            cy.email(email.emails);
            cy.skills("APIs"); 
        })
    })
})