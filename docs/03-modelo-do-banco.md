# Modelo do Banco de Dados

## 1. Objetivo

Este documento descreve o modelo relacional do banco de dados utilizado pelo SumuBank, apresentando as tabelas, seus relacionamentos e as principais decisões de modelagem adotadas para suportar as regras de negócio da aplicação.

## 2. Banco de Dados

| Item           | Valor                             |
| -------------- | --------------------------------- |
| SGBD           | PostgreSQL                        |
| ORM            | Spring Data JPA / Hibernate       |
| Migrações      | Flyway *(vamos usar futuramente)* |
| Ambiente Local | Docker                            |
| Produção       | Neon PostgreSQL                   |


## 3. Modelo Relacional

clientes
│
│ 1:N
│
contas
│
│ 1:N
│
transacoes

contas
│
│ 1:1
│
cartoes

usuarios
│
│ N:1
│
perfis

## 4. Tabelas

clientes

| Campo      | Tipo      |
| ---------- | --------- |
| id         | UUID      |
| nome       | VARCHAR   |
| cpf        | VARCHAR   |
| email      | VARCHAR   |
| telefone   | VARCHAR   |
| status     | VARCHAR   |
| created_at | TIMESTAMP |

contas

| Campo      | Tipo    |
| ---------- | ------- |
| id         | UUID    |
| numero     | VARCHAR |
| agencia    | VARCHAR |
| saldo      | DECIMAL |
| tipo       | VARCHAR |
| status     | VARCHAR |
| cliente_id | UUID    |

transacoes

| Campo         | Tipo      |
| ------------- | --------- |
| id            | UUID      |
| tipo          | VARCHAR   |
| valor         | DECIMAL   |
| data          | TIMESTAMP |
| conta_origem  | UUID      |
| conta_destino | UUID      |

cartoes

| Campo    | Tipo    |
| -------- | ------- |
| id       | UUID    |
| numero   | VARCHAR |
| limite   | DECIMAL |
| status   | VARCHAR |
| conta_id | UUID    |

usuarios

| Campo      | Tipo    |
| ---------- | ------- |
| id         | UUID    |
| login      | VARCHAR |
| senha      | VARCHAR |
| cliente_id | UUID    |

perfis

| Campo | Tipo    |
| ----- | ------- |
| id    | UUID    |
| nome  | VARCHAR |

usuario_perfil

| Campo      | Tipo |
| ---------- | ---- |
| usuario_id | UUID |
| perfil_id  | UUID |

## 5. Relacionamentos

| Origem  | Relacionamento | Destino   |
| ------- | -------------- | --------- |
| Cliente | 1:N            | Conta     |
| Conta   | 1:N            | Transação |
| Conta   | 1:1            | Cartão    |
| Usuário | N:N            | Perfil    |


## 6. Índices

CPF

UNIQUE

-----------------

EMAIL

UNIQUE

-----------------

NUMERO_CONTA

UNIQUE

-----------------

LOGIN

UNIQUE

## 7. Convenções

* Todas as tabelas utilizarão nomes no plural.
* Chaves primárias serão UUID.
* Datas utilizarão o padrão UTC.
* Todas as tabelas possuirão created_at e updated_at.
* Chaves estrangeiras seguirão o padrão <entidade>_id.
* Valores monetários utilizarão DECIMAL.