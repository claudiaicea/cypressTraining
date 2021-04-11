/// <reference types="Cypress" />

describe ('My first test suite', function(){
    it ('My first test case', function(){

        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)
//Assert
        cy.get('.products').find('.product').should('have.length',4)
//find element by index, text, then click
        cy.get('.products').find('.product').eq('2').contains('ADD TO CART').click()
//finr element using 'each' 

cy.get('.products').find('.product').each(($el,index,$list) => {
const textVeg=$el.find('h4.product-name').text()

if(textVeg.includes('Cashews')){
    $el.find('button').click()
}

}
)
            })
})