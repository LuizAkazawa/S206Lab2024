/// <reference = cypress>

describe("Testes da criação, registro e login", ()=> {

    it("Teste login com email com falha", ()=> {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type("teste@gmail.com")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("123sdf") 
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.message-error > div').should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily.")
    })

    it("Teste criaçao de conta", ()=> {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname').type("qwe")
        cy.get('#lastname').type("qwe")
        cy.get('#email_address').type("testesQwe@gmail.com")
        cy.get('#password').type("Diguirimdomdom@@@")
        cy.get('#password-confirmation').type("Diguirimdomdom@@@")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    })

    it("Teste login conta criada", ()=> {
        login()
    })

    
    it("Teste para adicionar item ao carrinho", ()=> {
        login()
        cy.get('#ui-id-5').click()
        cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
        cy.get('#option-label-size-143-item-167').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should("contain.text", "You added")
        

    })

    it("Teste para deslogar", ()=> {
        login()
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
        cy.get('.base').should("contain.text", "You are signed out")
    })

    it("Teste criaçao de conta com senha fraca", ()=> {
        cy.clearCookies()
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname').type("tes")
        cy.get('#lastname').type("te")
        cy.get('#email_address').type("teste@hotmail.com")
        cy.get('#password').type("aaa")
        cy.get('#password-confirmation').type("aaa")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#password-strength-meter').should("contain.text", "Weak") 
    })


    

})


function login(){
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type("testesQwe@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Diguirimdomdom@@@")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should("contain.text", "Welcome,")
}
