describe("Verify if Google is opening correctly", () => {

    it("Open TRX webpage correctly from google search", () => {

        cy.visit("");
        const searchField = cy.get("[title='Buscar']");
        console.log(searchField)

        searchField.type("tradetrax{enter}")
        
        const link = cy.get("#search a").contains("tradetrax").eq('0')

        link.click()

    })


})
