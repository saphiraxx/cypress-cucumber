/// <reference types="Cypress" />

import CriarContaElements from '../elements/CriarContaElements'
const criarContaElements = new CriarContaElements
const url = Cypress.config("baseUrl")

class criarConta {

    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoPaginaLogin() {
        cy.get(criarContaElements.botaoLogin()).click()
    }

    clicarBotaoRegister() {
        cy.get(criarContaElements.botaoRegister()).click()
    }
  
    campoFirstName() {
        cy.get(criarContaElements.firstName())
          .type(criarContaElements.inserirNome())
    }

    campoLastName() {
        cy.get(criarContaElements.lastName())
          .type(criarContaElements.inserirSobrenome())
    }

    campoEmailAddress() {
        cy.get(criarContaElements.emailAddress())
          .type(criarContaElements.inserirEmail())
    }

    selectDDD() {
        cy.get(criarContaElements.selectDdd()).click()
          .get(criarContaElements.selectBrazil()).contains("Brazil").click()
    }

    campoPhoneNumber() {
        cy.get(criarContaElements.phoneNumber())
          .type(criarContaElements.inserirNumero())
    }

    campoCompanyName() {
        cy.get(criarContaElements.companyName())
          .type(criarContaElements.inserirNomeEmpresa())
    }

    campoStreetAddress() {
        cy.get(criarContaElements.streetAddress())
          .type(criarContaElements.inserirEndereco())
    }
    
    campoStreetAddress2() {
        cy.get(criarContaElements.streetAddress2())
          .type(criarContaElements.inserirEndereco2())
    }

    campoCity() {
        cy.get(criarContaElements.city())
          .type(criarContaElements.nomeCity())
    }

    campoState() {
        cy.get(criarContaElements.state())
          .type(criarContaElements.nomeState()).click()
    }
    campoPostcode() {
        cy.get(criarContaElements.postcode())
          .type(criarContaElements.inserirPostcode())
    }

    selectCountry() {
        cy.get(criarContaElements.country()).click()
          .get(criarContaElements.Brazil()).click()
    }

    selectHowDidYouFindUs() {
        cy.get(criarContaElements.customField1()).click()
          .get(criarContaElements.Friend()).click()
    }

    campoMobileNumber() {
        cy.get(criarContaElements.customField2()).click()
          .type(criarContaElements.inserirNumeroMovel())
    }

    campoPassword() {
        cy.get(criarContaElements.password()).click()
          .type(criarContaElements.inserirSenha())
    }

    campoConfirmPassword() {
        cy.get(criarContaElements.confirmPassword()).click()
          .type(criarContaElements.confirmarSenha())
    }
    
    campoReCaptcha() {
        cy.get(criarContaElements.reCaptcha()).click()
    }

    botaoRegister() {
        cy.get(criarContaElements.register()).click()
    }

   
}

export default criarConta;