# Deploy

## 1. Objetivo

Este documento descreve a estratégia de deploy do SumuBank, apresentando os serviços utilizados, a arquitetura de produção e o fluxo de publicação da aplicação.

## 2. Arquitetura de Produção

                 Usuário
                     │
                     ▼
             Frontend (Vercel)
                     │
               HTTPS / REST
                     │
                     ▼
           Backend (Render)
          │              │
          ▼              ▼
    Neon PostgreSQL     CloudAMQP
            │
            ▼
        AWS S3

## 3. Serviços Utilizados

| Serviço        | Plataforma                | Finalidade                      |
| -------------- | ------------------------- | ------------------------------- |
| Frontend       | Vercel                    | Hospedagem da aplicação Angular |
| Backend        | Render                    | Hospedagem da API Spring Boot   |
| Banco de Dados | Neon PostgreSQL           | Persistência dos dados          |
| Mensageria     | CloudAMQP                 | RabbitMQ em produção            |
| Armazenamento  | AWS S3                    | Upload de imagens e documentos  |
| Código-fonte   | GitHub                    | Versionamento                   |
| CI/CD          | GitHub Actions *(futuro)* | Automação do deploy             |

## 4. Fluxo de Deploy

Push no GitHub

↓

GitHub

↓

Deploy Automático

↓

Vercel

↓

Render

↓

Aplicação Atualizada

## 5. Variáveis de Ambiente

| Variável          | Descrição                           |
| ----------------- | ----------------------------------- |
| DATABASE_URL      | Conexão com o PostgreSQL            |
| DB_USERNAME       | Usuário do banco                    |
| DB_PASSWORD       | Senha do banco                      |
| JWT_SECRET        | Chave utilizada para geração do JWT |
| AWS_ACCESS_KEY    | Chave de acesso da AWS              |
| AWS_SECRET_KEY    | Chave secreta da AWS                |
| AWS_REGION        | Região do bucket                    |
| AWS_BUCKET_NAME   | Nome do bucket S3                   |
| RABBITMQ_HOST     | Endereço do RabbitMQ                |
| RABBITMQ_PORT     | Porta do RabbitMQ                   |
| RABBITMQ_USERNAME | Usuário                             |
| RABBITMQ_PASSWORD | Senha                               |

## 6. Estratégia de Deploy

| Ambiente    | Objetivo                                  |
| ----------- | ----------------------------------------- |
| Local       | Desenvolvimento utilizando Docker Compose |
| Produção    | Aplicação publicada para demonstração     |