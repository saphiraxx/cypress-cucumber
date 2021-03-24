/* global Given, Then, When */

import CriarConta from '../pageobjects/criarConta'
const criarConta = new CriarConta

Given("acesso o site PHPTRAVELS", () => {
    criarConta.acessarSite();
})

When("acesso a página de registro", () => {
    criarConta.clicarBotaoRegister();
})

Then("realizo o preenchimento do formulário de registro",() => {
    criarConta.preencherFormularioRegistro();
})

And("salvo o formulário",() => {
    criarConta.salvarFormulario();
})
