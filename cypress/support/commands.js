Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('eduardo@email.com')
    cy.get('#open-text-area').type('Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos. PV 16:3', {delay: 0 })
    cy.get('button[type="submit"]').click()
})