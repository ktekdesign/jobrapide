import React from 'react'
import Term from './[id]'

describe('<Term />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Term />)
  })
})
