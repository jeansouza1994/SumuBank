# Decisões Técnicas

## Objetivo

Este documento registra as principais decisões técnicas adotadas durante o desenvolvimento do SumuBank, bem como as justificativas para cada escolha. O objetivo é documentar o racional por trás da arquitetura e facilitar futuras evoluções do projeto.

## Motivo da utilização de cada tecnologia

| Tecnologia      | Decisão              | Justificativa                                                                               |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------- |
| Angular         | Framework Frontend   | Separação entre interface e regras de negócio, além de ampla adoção no mercado corporativo. |
| Spring Boot     | Backend              | Desenvolvimento rápido de APIs REST com um ecossistema maduro e amplamente utilizado.       |
| PostgreSQL      | Banco de dados       | Banco relacional robusto, gratuito e com excelente integração ao Spring Data JPA.           |
| Docker          | Conteinerização      | Garantir que qualquer desenvolvedor consiga executar o projeto com o mesmo ambiente.        |
| Docker Compose  | Orquestração         | Facilitar a execução dos serviços localmente.                                               |
| Swagger         | Documentação         | Documentação automática da API REST.                                                        |
| RabbitMQ        | Mensageria           | Comunicação assíncrona e desacoplamento entre processos.                                    |
| Spring Security | Segurança            | Implementação de autenticação e autorização.                                                |
| JWT             | Autenticação         | Autenticação stateless para APIs REST.                                                      |
| JUnit           | Testes               | Testes unitários das regras de negócio.                                                     |
| Mockito         | Mock de dependências | Isolamento dos testes unitários.                                                            |
| AWS S3          | Armazenamento        | Upload de arquivos e documentos dos usuários.                                               |
| Render          | Deploy do backend    | Hospedagem simples com plano gratuito.                                                      |
| Vercel          | Deploy do frontend   | Integração nativa com projetos Angular e deploy automatizado.                               |
| Neon PostgreSQL | Banco em produção    | PostgreSQL gratuito na nuvem.                                                               |
| Prometheus      | Coleta de métricas   | Monitoramento da aplicação.                                                                 |
| Grafana         | Dashboards           | Visualização das métricas da aplicação.                                                     |

## Padrões adotados

| Decisão                          | Motivo                                                       |
| -------------------------------- | ------------------------------------------------------------ |
| API REST                         | Padronização da comunicação entre frontend e backend.        |
| Arquitetura em camadas           | Separação de responsabilidades.                              |
| DTOs                             | Evitar exposição direta das entidades.                       |
| UUID como chave primária         | Evitar previsibilidade de IDs e facilitar integrações.       |
| Versionamento da API (`/api/v1`) | Facilitar futuras evoluções sem quebrar clientes existentes. |
| Migrations com Flyway            | Controle de versão do banco de dados.                        |