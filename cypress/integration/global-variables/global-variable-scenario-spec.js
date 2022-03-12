import LoginPage from "../../support/pages/login-page"
import GlobalVariables from "../../support/pages/global-variables-page"

const loginPage = new LoginPage()
const globalVariables = new GlobalVariables()

beforeEach(() => {
    cy.clearCookies()
    cy.visit('/')
    loginPage.login('admin', 'admin')
})


describe('Global Variables related test cases', () => {

    it('add new global text variable', () => {
        var variableName = `variable-${Math.floor(Math.random() * 9999)}`

        globalVariables.goToGlobalVariablesPage()
        globalVariables.clicknewGlobalVariable()
        globalVariables.setVariableName(variableName)
        globalVariables.setLabel(`Label-${variableName}`)
        globalVariables.setValue(variableName)
        globalVariables.setDescription(`Description-${variableName}`)
        globalVariables.clickCreate()
        globalVariables.verifyVariableNameAndValue(variableName, variableName)
    })
})