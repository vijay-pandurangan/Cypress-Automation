import FolderPage from '../../support/pages/folder-page'
import LoginPage from '../../support/pages/login-page'
import Mainmenu from '../../support/pages/main-menu'

const loginPage = new LoginPage()
const mainMenu = new Mainmenu()
const folderPage = new FolderPage()


beforeEach(() => {
    cy.visit("http://localhost:5516/#/login")
})

describe("Folder page related test cases", () => {

    it('add new folder', () => {
        var foldername = `auto-${Math.floor(Math.random() * 9999)}`
        loginPage.login('admin', 'admin')
        folderPage.goToFolder()
        folderPage.addFolder(foldername)


    })

    it('open folder and create a new template', () => {
        var foldername = `auto-${Math.floor(Math.random() * 9999)}`
        var templatename = `template-${Math.floor(Math.random() * 9999)}`
        loginPage.login('admin', 'admin')
        folderPage.goToFolder()
        folderPage.openFolderAndAddNewTemplate(foldername,templatename)

    })
    


})