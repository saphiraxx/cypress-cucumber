Feature: Conta PHPTRAVELS

    Scenario: Criar uma conta no site
        Given acesso o site PHPTRAVELS
        When acesso a pagina de login
        Then acesso a pagina de registro
        and preencher o formulario de registro
        