import DashboardPage from '../../support/pages/dashboard-page'
import FolderPage from '../../support/pages/folder-page'
import LoginPage from '../../support/pages/login-page'
import Mainmenu from '../../support/pages/main-menu'
import ApplicationPage from '../../support/pages/application-page'


const loginPage = new LoginPage()
const applicationPage = new ApplicationPage()

beforeEach(() => {
    let url = Cypress.config().baseUrl
    cy.clearCookies()
    cy.visit(url)
    loginPage.login('admin', 'admin')
})


describe("Application related test cases", () => {

    it('add a new application and cancel it ', () => {
        var applicationName = `App-Cypress-${Math.floor(Math.random() * 9999)}`

        applicationPage.gotToApplicationPage()
        applicationPage.clickNewApplication()
        applicationPage.addNewApplication(applicationName)
        applicationPage.clickCancel()
        
    })


    it('add a new application and save it ', () => {
        var applicationName = `App-Cypress-${Math.floor(Math.random() * 9999)}`

        applicationPage.gotToApplicationPage()
        applicationPage.clickNewApplication()
        applicationPage.addNewApplication(applicationName)
        applicationPage.clickSave()
        applicationPage.filterApplication(applicationName)
    })

    it('add a new application and delete it', () => {
        var applicationName = `App-Cypress-${Math.floor(Math.random() * 9999)}`

        applicationPage.gotToApplicationPage()
        applicationPage.clickNewApplication()
        applicationPage.addNewApplication(applicationName)
        applicationPage.clickSave()
        applicationPage.filterApplication(applicationName)
        applicationPage.deleteApplication(applicationName)       
    })

    it('should filter based on application name', () => {
        var applicationName = `App-Cypress-${Math.floor(Math.random() * 9999)}`

        applicationPage.gotToApplicationPage()
        applicationPage.clickNewApplication()
        applicationPage.addNewApplication(applicationName)
        applicationPage.clickSave()
        applicationPage.filterApplication(applicationName)
    })
})