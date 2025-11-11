
/// <reference types="cypress"/>

describe('funcionalidade: login',() => {

it('deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('ygormatheuspas@gmail.com')
    cy.get('#password').type('59255441p')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ygormatheuspas (não é ygormatheuspas? Sair)')
})


})