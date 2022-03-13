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

    it('add a new global text variable', () => {
        var variableName = `variable-${Math.floor(Math.random() * 9999)}`
        var label = `Label-${variableName}`
        var description = `Description-${variableName}`

        globalVariables.goToGlobalVariablesPage()
        globalVariables.clicknewGlobalVariable()
        globalVariables.setVariableName(variableName)
        globalVariables.setLabel(label)
        globalVariables.setTextValue(variableName)
        globalVariables.setDescription(description)
        globalVariables.clickCreate()
        globalVariables.verifyVariableNameAndValue('${global.'+ variableName + '}', variableName,label)
    })

    
    it('add a new global password variable', () => {
        var variableName = `PasswordVariable-${Math.floor(Math.random() * 9999)}`
        var passswordValue = "Root@123"
        var label = `Label-${variableName}`
        var description = `Description-${variableName}`

        globalVariables.goToGlobalVariablesPage()
        globalVariables.clicknewGlobalVariable()
        globalVariables.setVariableName(variableName)
        globalVariables.setLabel(label)
        globalVariables.setType('Password')
        globalVariables.setPasswordValue(passswordValue)
        globalVariables.setDescription(description)
        globalVariables.clickCreate()
        globalVariables.verifyVariableNameAndValue('${global.'+ variableName + '}',  '******',label)      

    })


    it('add a new global integer variable', () => {
        var variableName = `IntegerVariable-${Math.floor(Math.random() * 9999)}`
        var integerValue = "490"
        var label = `Label-${variableName}`
        var description = `Description-${variableName}`

        globalVariables.goToGlobalVariablesPage()
        globalVariables.clicknewGlobalVariable()
        globalVariables.setVariableName(variableName)
        globalVariables.setLabel(label)
        globalVariables.setType('Number (integer)')
        globalVariables.setTextValue(integerValue)
        globalVariables.setDescription(description)
        globalVariables.clickCreate()
        globalVariables.verifyVariableNameAndValue('${global.'+ variableName + '}', integerValue, label)      

    })

})