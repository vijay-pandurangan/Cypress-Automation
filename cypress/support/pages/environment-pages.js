export default class EnvironmentPage {

    goToEnvironmentPage() {
        cy.visit('#/environments')
        return this
    }

    clickNewEnvironment() {
        cy.get('.action-toolbar-actions .MuiButton-label').contains('New environment').should('be.visible')
        cy.get('.action-toolbar-actions .MuiButton-label').contains('New environment').click()
        cy.get('input[placeholder="Add..."]').should('be.visible')
        return this
    }

    addNewEnvironment(environmentName,stageName) {
        //cy.get('input[placeholder="Add..."]').clear()
        cy.get('.xl-react-components-input input[placeholder="Add..."]').wait(1000).type(environmentName)
        cy.get('input[placeholder="Select stage..."]').should('be.visible')
        cy.get('input[placeholder="Select stage..."]').type(stageName)
        cy.get(`div[title=${stageName}] div:nth-child(1)`).should('be.visible').click({force: true})
        return this

    }

    clickCreate() {
        cy.get('.action-toolbar-actions .MuiButton-label').contains('Create').should('be.visible')
        cy.get('.action-toolbar-actions .MuiButton-label').contains('Create').should('be.visible').click()
        return this
    }

}