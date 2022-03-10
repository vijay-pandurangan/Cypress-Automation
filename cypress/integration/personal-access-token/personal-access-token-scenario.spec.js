import FolderPage from '../../support/pages/folder-page'
import LoginPage from '../../support/pages/login-page'
import Mainmenu from '../../support/pages/main-menu'
import PersonalAccessTokenPage from '../../support/pages/personal-access-token-page'

const loginPage = new LoginPage()
const personalAccessTokenPage = new PersonalAccessTokenPage()

beforeEach(() => {
    let url = Cypress.config().baseUrl
    cy.clearCookies()
    cy.visit(url)
    loginPage.login('admin', 'admin')
})

describe("Personal access token related test cases", () => {

    it('add a new personal access token', () => {
        const accessTokenName = 'new access token ' + new Date().getTime();

        personalAccessTokenPage.selectAccessTokenfromDropdown()
        personalAccessTokenPage.addToken(accessTokenName)
        personalAccessTokenPage.expectTokenisAdded(accessTokenName)

    })

    it('should not allow duplicate token name', () => {
        const accessTokenName = 'new access token ' + new Date().getTime();

        personalAccessTokenPage.selectAccessTokenfromDropdown()
        personalAccessTokenPage.addToken(accessTokenName)
        personalAccessTokenPage.duplicateTokenName(accessTokenName)


    })

    it('add new token and delete it', () => {
        const accessTokenName = 'new access token ' + new Date().getTime();

        personalAccessTokenPage.selectAccessTokenfromDropdown()
        personalAccessTokenPage.addToken(accessTokenName)
        personalAccessTokenPage.expectTokenisAdded(accessTokenName)
        personalAccessTokenPage.deleteToken(accessTokenName)
        personalAccessTokenPage.expectTokenIsRemoved(accessTokenName)

    })

    it.only('add new token and copy it', () => {
        const accessTokenName = 'new access token ' + new Date().getTime();

        personalAccessTokenPage.selectAccessTokenfromDropdown()
        personalAccessTokenPage.addToken(accessTokenName)
        personalAccessTokenPage.expectTokenisAdded(accessTokenName)
        personalAccessTokenPage.copyToken()       
    })
})
