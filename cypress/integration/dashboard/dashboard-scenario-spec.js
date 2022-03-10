import DashboardPage from '../../support/pages/dashboard-page'
import FolderPage from '../../support/pages/folder-page'
import LoginPage from '../../support/pages/login-page'
import Mainmenu from '../../support/pages/main-menu'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

beforeEach(() => {
    let url = Cypress.config().baseUrl
    cy.clearCookies()
    cy.visit(url)
    loginPage.login('admin', 'admin')
})

describe('Dashboard related test cases' , () => {

    it('create a new dashboard and delete it', () => {
        dashboardPage.goToDashboardPage()
        dashboardPage.clickAddCustomDashboard()
        dashboardPage.addNewDashboard('Release statistics template')
        dashboardPage.deleteCustomDashboard()

    })
})
