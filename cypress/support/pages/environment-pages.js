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
        cy.get('.xl-react-widget-input-component input[placeholder="Add..."]').type(environmentName)
        cy.get('input[placeholder="Select stage..."]').should('be.visible')
        cy.get('input[placeholder="Select stage..."]').type(stageName)
        cy.get(`div[title=${stageName}] span div`).click()


    }

}