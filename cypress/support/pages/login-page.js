export default class LoginPage {

    login(username, password) {
        cy.get('#inputLogin').type(username)
        cy.get('#inputPassword').type(password)
        cy.get('.login-button button[type=submit]').click()
        cy.get('#releases-content').should('be.visible')  
        return this     
    }


    invalidLogin(username, password) {
        cy.get('#inputLogin').type(username)
        cy.get('#inputPassword').type(password)
        cy.get('.login-button button[type=submit]').click()
        cy.get('#inputPassword').should('be.visible')    
        return this   
    }
}