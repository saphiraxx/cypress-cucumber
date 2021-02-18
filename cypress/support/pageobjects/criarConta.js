/// <reference types="Cypress" />

import CriarContaElements from '../elements/CriarContaElements'
const criarContaElements = new CriarContaElements
const url = Cypress.config("baseUrl")

class criarConta {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(criarContaElements.botaoLogin()).click()
    }

    // Clica no botão que acessa a página de registro
    clicarBotaoRegister() {
        cy.get(criarContaElements.botaoRegister()).click()
    }
  
    // No campo first name inserir nome
    campoFirstName() {
        cy.get(criarContaElements.firstName())
          .type(criarContaElements.inserirNome())
    }

    // No campo last name inserir sobrenome
    campoLastName() {
        cy.get(criarContaElements.lastName())
          .type(criarContaElements.inserirSobrenome())
    }

    // No campo email address inserir email
    campoEmailAddress() {
        cy.get(criarContaElements.emailAddress())
          .type(criarContaElements.inserirEmail())
    }

    // No campo phone number inserir numero de telefone
    campoPhoneNumber() {
        cy.get(criarContaElements.phoneNumber())
          .type(criarContaElements.inserirNumero())
    }

    // No campo company name inserir nome da empresa
    campoCompanyName() {
        cy.get(criarContaElements.companyName())
          .type(criarContaElements.inserirNomeEmpresa())
    }

    // No campo street address inserir endereço
    campoStreetAddress() {
        cy.get(criarContaElements.streetAddress())
          .type(criarContaElements.inserirEndereco())
    }
    
    // No campo street address 2 inserir endereço 2
    campoStreetAddress2() {
        cy.get(criarContaElements.streetAddress2())
          .type(criarContaElements.inserirEndereco2())
    }

    // select State
    selectState() {
        cy.get(criarContaElements.state()).click()
          .get(criarContaElements.MT()).click()
    }

    // No campo Postcode inserir código postal
    campoPostcode() {
        cy.get(criarContaElements.postcode())
          .type(criarContaElements.inserirCodigoPostal())
    }

    // select Country 
    selectCountry() {
        cy.get(criarContaElements.country()).click()
          .get(criarContaElements.Brazil()).click()
    }

    // select How did you find us? 
    selectCustomField1() {
        cy.get(criarContaElements.customField1()).click()
          .get(criarContaElements.Friend()).click()
    }

    // Campo Mobile Number
    campoCustomField2() {
        cy.get(criarContaElements.customField2()).click()
          .type(criarContaElements.inserirNumeroMovel())
    }

    // Campo Password
    campoPassword() {
        cy.get(criarContaElements.password()).click()
          .type(criarContaElements.inserirSenha())
    }

    // Campo Confirm Password
    campoConfirmPassword() {
        cy.get(criarContaElements.confirmPassword()).click()
          .type(criarContaElements.confirmarSenha())
    }
    
    // Campo reCAPTCHA
    campoReCaptcha() {
        cy.get(criarContaElements.reCaptcha()).click()
    }

    // botao Register
    botaoRegister() {
        cy.get(criarContaElements.register()).click()
    }
    
   
}

export default criarConta;