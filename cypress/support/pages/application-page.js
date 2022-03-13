export default class ApplicationPage {
    gotToApplicationPage() {
        cy.visit('#/applications')
        return this
    }

    clickNewApplication() {
        cy.get('.action-toolbar-actions .MuiButton-label').contains('New application').should('be.visible')
        cy.get('.action-toolbar-actions .MuiButton-label').contains('New application').click()
        cy.get('input[placeholder="Add name..."]').should('be.visible')
        return this

    }

    addNewApplication(applicationName) {
        cy.get('input[placeholder="Add name..."]').should('be.visible')
        cy.get('input[placeholder="Add name..."]').clear()
        cy.get('input[placeholder="Add name..."]').type(applicationName)
        return this
    }
    
    clickSave() {
        cy.get('.action-toolbar-actions .MuiButton-label').contains('Save').should('be.visible')
        cy.get('.action-toolbar-actions .MuiButton-label').contains('Save').should('be.visible').click()
        return this
    }

    clickCancel() {
        cy.get('.action-toolbar-actions .MuiButton-label').contains('Cancel').should('be.visible')
        cy.get('.action-toolbar-actions .MuiButton-label').contains('Cancel').should('be.visible').click()
        return this       
    }

    filterApplication(applicationName) {
        cy.get('input[placeholder="Filter by application..."]').should('be.visible')
        cy.get('input[placeholder="Filter by application..."]').clear()
        cy.get('input[placeholder="Filter by application..."]').type(applicationName)
        cy.get(`div[title=${applicationName}]`).should('be.visible')
        return this
    }

    deleteApplication(applicationName) {
        cy.get('.actions-container.col-xs-2 span[data-test="delete-action"]').click()
        cy.get('.modal-footer .xl-react-button').contains('Delete').click()
        cy.get('.no-data-message').invoke('show').should('be.visible')
        return this
       
        
    }
}