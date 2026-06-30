# Requisitos Funcionais

## 1. Objetivo

Este documento descreve as funcionalidades previstas para o SumuBank, organizadas por tipo de usuário. Os requisitos serão implementados de forma incremental conforme o roadmap do projeto.

## 2. Funcionalidades do Cliente

| Código | Funcionalidade                    |
| ------ | --------------------------------- |
| RF-001 | Criar uma conta no sistema        |
| RF-002 | Realizar login                    |
| RF-003 | Atualizar dados cadastrais        |
| RF-004 | Consultar saldo                   |
| RF-005 | Consultar extrato                 |
| RF-006 | Realizar depósito                 |
| RF-007 | Realizar saque                    |
| RF-008 | Realizar transferência            |
| RF-009 | Consultar histórico de transações |
| RF-010 | Alterar senha                     |

## 3. Funcionalidades do Administrador

| Código | Funcionalidade                   |
| ------ | -------------------------------- |
| RF-101 | Listar clientes                  |
| RF-102 | Consultar detalhes de um cliente |
| RF-103 | Bloquear conta                   |
| RF-104 | Desbloquear conta                |
| RF-105 | Listar contas cadastradas        |

## 4. Regras Gerais

* Um CPF só pode possuir um cadastro.
* O e-mail deve ser único.
* Uma conta bloqueada não pode realizar movimentações.
* O saldo da conta não pode ficar negativo.
* Apenas administradores podem bloquear contas.
* Toda transação deve ser registrada no histórico.
* O cliente só pode visualizar suas próprias informações.

## 5. Requisitos Não Funcionais

| Código  | Requisito                                           |
| ------- | --------------------------------------------------- |
| RNF-001 | A API deverá seguir o padrão REST.                  |
| RNF-002 | A autenticação utilizará JWT.                       |
| RNF-003 | O sistema será containerizado com Docker.           |
| RNF-004 | A documentação será disponibilizada via Swagger.    |
| RNF-005 | Os dados serão persistidos em PostgreSQL.           |
| RNF-006 | A aplicação possuirá testes automatizados.          |
| RNF-007 | O sistema será monitorado com Prometheus e Grafana. |

## 6. Funcionalidades Futuras

* Investimentos.
* Empréstimos.
* Agendamento de transferências.