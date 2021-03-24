/// <reference types="Cypress" />

import CriarContaElements from '../elements/criarContaElements'
const criarContaElements = new CriarContaElements
const url = Cypress.config("baseUrl")

class criarConta {

    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoRegister() {
        cy.get(criarContaElements.botaoRegister()).contains("Register").click()
    }
  
    preencherFormularioRegistro() {
        cy.get(criarContaElements.firstName())
          .type(criarContaElements.inserirNome())
    
        cy.get(criarContaElements.lastName())
          .type(criarContaElements.inserirSobrenome())
    
        cy.get(criarContaElements.emailAddress())
          .type(criarContaElements.inserirEmail())

        cy.get(criarContaElements.selectDdd()).click()
          .get(criarContaElements.selectBrazil()).contains("Brazil").click()
    
        cy.get(criarContaElements.phoneNumber())
          .type(criarContaElements.inserirNumero())
    
        cy.get(criarContaElements.companyName())
          .type(criarContaElements.inserirNomeEmpresa())
   
        cy.get(criarContaElements.streetAddress())
          .type(criarContaElements.inserirEndereco())
    
        cy.get(criarContaElements.streetAddress2())
          .type(criarContaElements.inserirEndereco2())
    
        cy.get(criarContaElements.city())
          .type(criarContaElements.nomeCity())
   
        cy.get(criarContaElements.state())
          .type(criarContaElements.nomeState()).click()
    
        cy.get(criarContaElements.postcode())
          .type(criarContaElements.inserirPostcode())
   
        cy.get(criarContaElements.country())
          .select(criarContaElements.Brazil())
    
        cy.get(criarContaElements.customField1())
          .select(criarContaElements.Friend())
   
        cy.get(criarContaElements.customField2()).click()
          .type(criarContaElements.inserirNumeroMovel())
    
        cy.get(criarContaElements.password()).click()
          .type(criarContaElements.inserirSenha())
    
        cy.get(criarContaElements.confirmPassword()).click()
          .type(criarContaElements.confirmarSenha())
    }
    
    salvarFormulario() {
        cy.get(criarContaElements.reCaptcha()).click()

        cy.get(criarContaElements.register()).click()
    }

   
}

export default criarConta;