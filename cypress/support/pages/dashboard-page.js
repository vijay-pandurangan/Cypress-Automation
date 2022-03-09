export default class DashboardPage {
    goToDashboardPage () {
        cy.visit('#/reports')
        return this
    }

    clickAddCustomDashboard() {
        cy.get('.dot-list-item-link').should('be.visible')
        cy.get('.dot-list-item-link').contains('Add custom dashboard').click()
        return this

    }

    addNewDashboard(customDashboardName) {
        cy.get('#tile-filter').type(customDashboardName)
        cy.get('.row.mbs.ng-scope').invoke('show').find('.button ').contains('Select').click()
        cy.get('.button.save.primary.ng-scope').contains('Next').click()
        cy.get('.button.save.primary.ng-binding').contains('Create').click()
        cy.get('li[data-testid="sideNav-item-3"]').contains('Release statistics').should('be.visible')
        return this
    }

    deleteCustomDashboard() {
        cy.get('.MuiButton-containedPrimary').contains('Configure dashboard').should('be.visible')
        cy.get('.MuiButton-containedPrimary').contains('Configure dashboard').click()
        cy.get('.action-toolbar-actions .dot-button').contains('Delete dashboard').should('be.visible')
        cy.get('.action-toolbar-actions .dot-button').contains('Delete dashboard').should('be.visible').click()
        cy.get('.modal-footer button[type="submit"]').contains('Delete').click()
        return this

    }
}