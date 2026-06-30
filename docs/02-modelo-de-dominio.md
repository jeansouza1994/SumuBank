# Modelo de Domínio

## Objetivo

Este documento apresenta as principais entidades do domínio do SumuBank, seus relacionamentos e responsabilidades dentro do sistema. O objetivo é representar o negócio de forma independente da implementação e do banco de dados.

## Diagrama de Domínio

Cliente -> possui uma ou mais -> conta -> registra várias -> transação

Conta -> possui -> Cartão

## Arquitetura da Solução

Cliente - Representa uma pessoa cadastrada no banco

* Nome
* CPF
* Email
* Telefone
* Data de cadastro
* Status

Conta - Responsável por armazenar os dados financeiros do cliente

* Número
* Agência
* Saldo
* Tipo
* Status

Transacao - Representa qualquer movimentação financeira

* Depósito
* Saque
* Transferência

Cartão - Representa o cartão associado à conta

* Número
* Limite
* Status

Usuário - Representa as credenciais utilizadas para autenticação

Perfil - Define as permissões do usuário, como CLIENTE OU ADMIN

## Relacionamentos

| Origem  | Relacionamento | Destino   |
| ------- | -------------- | --------- |
| Cliente | possui         | Conta     |
| Conta   | registra       | Transação |
| Conta   | possui         | Cartão    |
| Usuário | possui         | Perfil    |

## Regras de Negócio

* Um cliente pode possuir uma ou mais contas.
* Uma conta pertence a apenas um cliente.
* Uma transferência sempre possui uma conta de origem e uma conta de destino.
* O saldo não pode ficar negativo.
* Contas bloqueadas não podem realizar movimentações.
* Apenas administradores podem bloquear contas.
* Um usuário deve possuir pelo menos um perfil de acesso.