export default class GlobalVariables {

    goToGlobalVariablesPage() {
        cy.visit('#/global-variables')
        return this
    }

    clicknewGlobalVariable() {
        cy.get('.MuiButton-label').contains('New global variable').should('be.visible')
        //cy.get('.MuiButton-label').contains('New global variable').trigger('mouseover').click()
        cy.get('.MuiButton-label').contains('New global variable').wait(1000).click({force:true})
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

    setTextValue(value) {
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
        cy.get('#modal').should('not.be.visible')
        cy.get('navigation-sidebar li.Mui-selected').should('contain','Global variables')
        return this

    }

    setType(type) {
        cy.get('select.input-block-level').select(type)
        return this
    }

    setPasswordValue(value) {
        cy.get('input[data-test-id="password-input"]').should('be.visible')
        cy.get('input[data-test-id="password-input"]').type(value)
    }

    verifyVariableNameAndValue(variableName,value,label) {
        cy.get('.variable').contains(variableName).should('be.visible')
        cy.get('.variable').contains(value).should('be.visible')
        cy.get('.variable').contains(label).should('be.visible')
        return this

    }

}