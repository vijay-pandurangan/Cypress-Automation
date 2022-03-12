import LoginPage from '../../support/pages/login-page'
import EnvironmentPage from '../../support/pages/environment-pages'

const loginPage = new LoginPage()
const environmentPage = new EnvironmentPage()

beforeEach(() => {
    cy.clearCookies()
    cy.visit('/')
    loginPage.login('admin', 'admin')
})

describe('Evironments related test cases', () => {

    it('add a new application', () => {
        var environmentName = 'env'
        environmentPage.goToEnvironmentPage()
        environmentPage.clickNewEnvironment()
        environmentPage.addNewEnvironment(environmentName, 'Production')
    })
})