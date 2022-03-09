export default class FolderPage {

    goToFolder(){
        cy.visit('#/folders')
    }

    addFolder(foldername) {
        cy.get('.icon-button.btn-add-folder').click()
        cy.get('.xl-react-component-input-wrapper.xl-react-widget-input-component input[type="text"]').type(foldername)
        cy.get('.button.primary').click()
        cy.get(`.folder-row [title=${foldername}]`).should('be.visible')
        return this

    }

    hoverOnFolderRow(folderName, actionLabel) {
        cy.get(`.folder-row-wrapper:contains(${folderName}) .folder-options-wrapper`).invoke('show').find(`.flatten-links a:contains(${actionLabel})`).click();
        return this
    }


    openFolderAndAddNewTemplate(foldername, templatename) {
        this.addFolder(foldername)
        cy.get(`.folder-row [title=${foldername}]`).click()
        cy.get('.btn-group.add-template').click()
        cy.get('.create-template').click()
        cy.get('#release-form-title').type(templatename)
        cy.get('span[class="ng-binding"]').click()
        return this
    }

}