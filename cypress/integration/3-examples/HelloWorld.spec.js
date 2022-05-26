import '@testing-library/cypress/add-commands';

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it(`should render a header that says 'Hello World!'`, () => {
    cy.findByRole('heading').should('contain', `Hello World!`);
  })

  it(`should render a header that says 'Hello Universe!'`, () => {
    cy.findByRole('heading').click();
    cy.findByRole('heading').should('contain', `Hello Universe!`);
  })

})