/* global Given, Then, When */

import CriarConta from '../pageobjects/CriarConta'
const criarConta = new CriarConta

Given("acesso o site PHPTRAVELS", () => {
    criarConta.acessarSite();
})

When("acesso a pagina de login", () => {
    criarConta.clicarBotaoPaginaLogin();
})

Then("acesso a pagina de registro", () => {
    criarConta.clicarBotaoRegister();
})

And("preencher o formulario de registro",() => {
    criarConta.preencherFormularioRegistro();
})
