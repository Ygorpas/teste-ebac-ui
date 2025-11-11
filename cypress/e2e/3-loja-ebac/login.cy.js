
/// <reference types="cypress"/>

describe('funcionalidade: login',() => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

afterEach(() => {
    cy.screenshot()
});

it('deve fazer login com sucesso', () => {
    cy.get('#username').type('ygormatheuspas@gmail.com')
    cy.get('#password').type('59255441p')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ygormatheuspas (não é ygormatheuspas? Sair)')
})

it('Deve exibir uma mensagem de erro ao inserir usúario inválido', () => {
    cy.get('#username').type('ygormatheus@gmail.com')
    cy.get('#password').type('59255441p')
    cy.get('.woocommerce-form > .button').click()

    //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
    cy.get('#username').type('ygormatheuspas@gmail.com')
    cy.get('#password').type('59255441ppp')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail ygormatheuspas@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
    
});

})