import '@testing-library/cypress/add-commands';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App, { PersonList } from '../../src/App.js'

describe('App', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders a PersonList', () => {
    const app = render(<App />);
    const childElement = app.getByText("PersonList");

    expect(childElement).to.exist();
  })

})