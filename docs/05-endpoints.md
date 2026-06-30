# Endpoints da API

## Objetivo

Este documento descreve os endpoints REST disponibilizados pelo backend do SumuBank. O objetivo é definir um contrato entre frontend e backend, facilitando o desenvolvimento e a manutenção da aplicação.

## Convenções da API

| Item         | Valor     |
| ------------ | --------- |
| Base URL     | `/api/v1` |
| Formato      | JSON      |
| Autenticação | JWT       |
| Padrão REST  | Sim       |
| Codificação  | UTF-8     |

## Autenticação

| Método | Endpoint         | Descrição           |
| ------ | ---------------- | ------------------- |
| POST   | `/auth/register` | Cadastro de usuário |
| POST   | `/auth/login`    | Login               |
| POST   | `/auth/refresh`  | Renovação do token  |
| POST   | `/auth/logout`   | Logout *(futuro)*   |

## Clientes

| Método | Endpoint         | Descrição                    |
| ------ | ---------------- | ---------------------------- |
| POST   | `/clientes`      | Cadastrar cliente            |
| GET    | `/clientes/{id}` | Buscar cliente               |
| PUT    | `/clientes/{id}` | Atualizar cliente            |
| DELETE | `/clientes/{id}` | Desativar cliente *(futuro)* |

## Contas

| Método | Endpoint               | Descrição         |
| ------ | ---------------------- | ----------------- |
| POST   | `/contas`              | Criar conta       |
| GET    | `/contas/{id}`         | Buscar conta      |
| GET    | `/contas/{id}/saldo`   | Consultar saldo   |
| GET    | `/contas/{id}/extrato` | Consultar extrato |

## Transações

| Método | Endpoint                    | Descrição              |
| ------ | --------------------------- | ---------------------- |
| POST   | `/transacoes/deposito`      | Realizar depósito      |
| POST   | `/transacoes/saque`         | Realizar saque         |
| POST   | `/transacoes/transferencia` | Realizar transferência |
| GET    | `/transacoes`               | Listar transações      |

## Administração

| Método | Endpoint                         | Descrição         |
| ------ | -------------------------------- | ----------------- |
| GET    | `/admin/clientes`                | Listar clientes   |
| GET    | `/admin/contas`                  | Listar contas     |
| PATCH  | `/admin/contas/{id}/bloquear`    | Bloquear conta    |
| PATCH  | `/admin/contas/{id}/desbloquear` | Desbloquear conta |

## Códigos HTTP

| Código | Significado            |
| ------ | ---------------------- |
| 200    | Sucesso                |
| 201    | Recurso criado         |
| 204    | Sem conteúdo           |
| 400    | Requisição inválida    |
| 401    | Não autenticado        |
| 403    | Acesso negado          |
| 404    | Recurso não encontrado |
| 409    | Conflito               |
| 500    | Erro interno           |

## Códigos HTTP

| Versão    | Status             |
| --------- | ------------------ |
| `/api/v1` | Em desenvolvimento |
| `/api/v2` | Planejada          |