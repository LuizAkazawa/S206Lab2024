/// <reference = cypress>

describe("Testes da criação, registro e login", ()=> {
    it("Teste registrar, logar, deletar usuario e tentar logar novamente para falhar", ()=> {
        let infos = criarUser()
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        logar(infos)
        cy.get("h1.ng-binding").should("contain.text", infos[0])
        cy.get('.ng-binding > a').click()
        cy.get('.btn').click()
        logar(infos)
        cy.get('.ng-binding').should("contain.text", "Username or password is incorrect")
    })



})


function logar(infos){
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
}

function criarUser(){
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let ID = hora + minuto + seg + "ID"
    let Senha = hora + minuto + seg + "Senha"
    let infos = [ID, Senha]

    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(Senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")

    return infos
}