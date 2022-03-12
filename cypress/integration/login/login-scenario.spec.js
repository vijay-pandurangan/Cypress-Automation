import LoginPage from '../../support/pages/login-page'
import Mainmenu from '../../support/pages/main-menu'

const loginPage = new LoginPage()
const mainMenu = new Mainmenu()
beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
})

describe('Login scenario test cases', () => {

    it("check valid login", () => {

        loginPage.login('admin', 'admin')

    })

    it("chek with invalid login credentials", () => {

        loginPage.invalidLogin('admin', 'admin1234')
    })

    it('check valid logout', () => {
        loginPage.login('admin', 'admin')
        mainMenu.logout()

    })

    it('check folder', () => {
        loginPage.login('admin', 'admin')
        cy.visit('#/folders')
    })
})