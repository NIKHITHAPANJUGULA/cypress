/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/')
   
      //verify application title
      
      cy.get('[placeholder="Search Amazon.in"]').clear().type('iphone 15 pro')
      
      cy.get('[value="Go"]').click()

      cy.title().should('contain', 'iphone')

      cy.url().should('contain', 'iphone')



  })

})