# Arquitetura

## Visão Geral

O SumuBank utiliza uma arquitetura cliente-servidor baseada em Angular e Spring Boot. O frontend é responsável pela interface do usuário, enquanto o backend centraliza as regras de negócio e a comunicação com os demais serviços. A arquitetura foi projetada para evoluir de forma incremental, permitindo a criação de novas features sem grandes alterações problemas.

## Arquitetura por Fases

| Fase            | Arquitetura                     |
| --------------- | ------------------------------- |
| Planejamento    | Documentação e modelagem        |
| MVP             | Angular + Spring + PostgreSQL   |
| Segurança       | Spring Security + JWT           |
| Testes          | JUnit + Mockito                 |
| Mensageria      | RabbitMQ                        |
| Deploy          | Docker + Cloud                  |
| Observabilidade | Actuator + Prometheus + Grafana |


## Arquitetura da Solução

               Usuário
                    │
                    ▼
              Angular Frontend
                    │
               HTTP / REST
                    │
                    ▼
           Spring Boot Backend
              │           │
              │           │
              ▼           ▼
        PostgreSQL     Swagger


Na Fase 4 esse desenho muda.

                 Usuário
                    │
                    ▼
              Angular Frontend
                    │
               HTTP / REST
                    │
                    ▼
           Spring Boot Backend
              │      │      │
              ▼      ▼      ▼
        PostgreSQL RabbitMQ AWS S3

Na Fase 6:

                 Usuário
                    │
                    ▼
              Angular Frontend
                    │
               HTTP / REST
                    │
                    ▼
                Spring Boot Backend
              │      │      │       │
              ▼      ▼      ▼       ▼
        PostgreSQL RabbitMQ AWS S3  Actuator
                                        │
                                        ▼
                                    Prometheus
                                        │
                                        ▼
                                    Grafana
                           
## Componentes

| Componente  | Responsabilidade                        |
| ----------- | --------------------------------------- |
| Angular     | Interface do usuário.                   |
| Spring Boot | API REST e regras de negócio.           |
| PostgreSQL  | Persistência dos dados.                 |
| RabbitMQ    | Comunicação assíncrona entre processos. |
| AWS S3      | Armazenamento de arquivos.              |
| Prometheus  | Coleta de métricas.                     |
| Grafana     | Visualização das métricas.              |


## Fluxo da Aplicação

Usuário -> Angular -> Spring -> Validação -> Banco -> Resposta -> Angular

Cliente -> angular -> Spring Boot -> Valida Saldo -> Salva transferência -> RabbitMQ -> Consumidor -> Notificação