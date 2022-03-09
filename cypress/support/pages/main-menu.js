export default class Mainmenu {

    logout() {
        cy.get('top-toolbar .avatar-wrapper').click()
        cy.get(".dot-menu li:contains('Log out')").click()
        //cy.get(".dot-menu li:contains('Access tokens')").click()
        cy.get('#inputLogin').should('be.visible')  
        return this     

    }
}