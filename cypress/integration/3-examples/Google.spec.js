import '@testing-library/cypress/add-commands';

describe("Google", () => {

  beforeEach(() => {
      cy.visit('http://www.google.com')
  })

  it("searching for 'Platform One' yields search results", () => {
    
    cy.get('.gLFyf').focus()
      .type('Platform One{enter}')
    
    cy.location().should((loc) => {
      expect(loc.search).to.include('?q=Platform+One')
    })
  
  })
    
})