export default class GlobalVariables {

    goToGlobalVariablesPage() {
        cy.visit('#/global-variables')
        return this
    }

    clicknewGlobalVariable() {
        cy.get('.MuiButton-label').contains('New global variable').should('be.visible')
        cy.get('.MuiButton-label').contains('New global variable').click()
        cy.get('input[name="fieldKey"]').should('be.visible')
        return this
    }

    setVariableName(variableName) {
        cy.get('input[name="fieldKey"]').should('be.visible')
        cy.get('input[name="fieldKey"]').should('be.visible').type(variableName)
        return this

    }
    
    setLabel(label) {
        cy.get('.variable-label input').should('be.visible')
        cy.get('.variable-label input').type(label)
        return this
    }

    setValue(value) {
        cy.get('input[ng-model="var.value"]').should('be.visible')
        cy.get('input[ng-model="var.value"]').type(value)
        return this

    }

    setDescription(description) {
        cy.get('.variable-description input').should('be.visible')
        cy.get('.variable-description input').type(description)
        return this
    }

    clickCreate() {
        cy.get('.modal-footer .button.save').should('be.visible')
        cy.get('.modal-footer .button.save').click()
        cy.get('.modal-body').should('not.be.visible')
        cy.get('navigation-sidebar li.Mui-selected').should('contain','Global variables')
        return this

    }

    verifyVariableNameAndValue(variableName,value) {
        cy.get('.variable').contains(variableName).should('be.visible')
        cy.get('.variable').contains(value).should('be.visible')
        return this

    }

}