/// <reference types="Cypress" />

describe ('My first test suite', function(){
    it ('My first test case', function(){

        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       

        //empty cart
        cy.get('.cart-icon > img').click()
        cy.wait(2000)
        cy.get('.cart-preview.active').contains('You cart is empty!')

        //add carrot to cart
        cy.get(".search-keyword").type("carrot")
        cy.wait(2000)
        cy.get('.products').find('.product').eq('0').contains('ADD TO CART').click()

        //check elements in cart
        cy.get('.cart-icon > img').click()
        cy.wait(2000)
        cy.get('.cart-items').find('.product-name').contains('Carrot')


        //add carrot to cart
        cy.get(".search-keyword").clear()
        cy.get(".search-keyword").type("melon")
        cy.wait(2000)
        cy.get('.products').find('.product').eq('0').find('.increment').click()
        cy.get('.products').find('.product').eq('0').contains('ADD TO CART').click()

        //check elements in cart
        cy.get('.cart-icon > img').click()
        cy.wait(2000)
        cy.get('.cart-items').find('.product-name').contains('Melon')

        //check total price
       // cy.get('.cart-icon > img').click()
      //  cy.wait(2000)
       // const item1 = cy.get('.cart-items').eq('0').find('.product-total').find('p.amount').text()
       // const item2 = cy.get('.cart-items').eq('1').find('.product-total').find('p.amount').text()

       cy.get('.cart-items').eq('0').find('.product-total').find('p.amount')
       cy.get('.cart-items').eq('1').find('.product-total').find('p.amount')

      //  const tot = parseInt(item1) + parseInt(item2)

       // cy.get('.cart-info').find('table > tbody > tr:nth-child(2) > td:nth-child(3) > strong').text().contains(tot.toString)

      
        //checkout
       // cy.get('.cart-preview').find('.action-block').find('button').click()


            })
})