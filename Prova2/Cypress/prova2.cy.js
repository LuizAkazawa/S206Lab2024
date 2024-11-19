/// <reference = cypress>

describe("Teste de login/logout, depósito e retirada", ()=> {
    it("Teste logout Harry Potter", ()=> {
        loginHarry()
        cy.get('.logout').click()
        cy.get('label').should("contain.text", "Your Name")
    })


    it("Teste para fazer depósito", ()=> {
        loginHarry()
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type("500")
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should("have.text",  "Deposit Successful")
    })

    it("Teste para fazer retirada sem saldo", ()=> {
        loginHarry()
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type("100")
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should("have.text", "Transaction Failed. You can not withdraw amount more than the balance.")

    })


})


function loginHarry(){
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select("Harry Potter")
    cy.get('form.ng-valid > .btn').click()
    cy.get('.borderM > :nth-child(1)').should("contain.text", "Welcome Harry Potter")
}