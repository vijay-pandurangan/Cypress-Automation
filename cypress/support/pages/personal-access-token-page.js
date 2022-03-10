export default class PersonalAccessTokenPage {

    selectAccessTokenfromDropdown() {
        cy.get('top-toolbar .avatar-wrapper').click()
        cy.get(".dot-menu li:contains('Access tokens')").click()
        cy.get('#tokenText').should('be.visible')
        return this
    }

    addToken(accessTokenName) {
        cy.get('#tokenText').type(accessTokenName)
        cy.get('button[type="submit"]').click()
        return this
    }

    expectTokenisAdded(tokenText) {
        cy.get('.dot-table').should('be.visible')
        cy.get('.dot-table').contains('tr', tokenText).should('have.length', 1);
        return this
    }

    duplicateTokenName(tokenName) {
        cy.get('#tokenText').type(tokenName)
        cy.get('#tokenText-helper-text').should('be.visible')
        cy.get('#tokenText-helper-text').contains('Token name already exists')
        return this
    }

    deleteToken(tokenText) {
        cy.get('.dot-table').should('be.visible')
        cy.get('.dot-table').contains('tr', tokenText).find('td .dot-icon-btn').click()
        cy.contains('button', 'Delete token').click()
        cy.wait(1000)
        return this        
    }

    expectTokenIsRemoved(tokenText) {
        cy.get('.dot-table').should('be.visible')
        cy.get('.dot-table').contains('tr', tokenText).should('have.length', 0)  
        return this     
    }

    copyToken() {
        cy.get('.token-success .dot-alert-banner').should('be.visible')
        cy.get('.token-success .MuiAlert-message').should('be.visible')
        //cy.get('.MuiButton-startIcon.MuiButton-iconSizeMedium').should('be.visible')
        //cy.get('.MuiButton-startIcon.MuiButton-iconSizeMedium').click()
        //cy.get('.token-success > .dot-alert-banner > .MuiAlert-action').invoke('show').contains('Copy token').should('be.visible')
        cy.get('.token-success > .dot-alert-banner > .MuiAlert-action').invoke('show').contains('Copy token').click()
        return this
    }
}