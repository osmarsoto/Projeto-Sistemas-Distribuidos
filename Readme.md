# Projeto API RESTful com Acesso a Banco de Dados

Este projeto consiste na construção de uma API RESTful completa utilizando Node.js e Express, que realiza operações CRUD (Create, Read, Update, Delete) sobre entidades armazenadas em um banco de dados relacional. A comunicação entre cliente e servidor é feita via JSON.

## Integrantes
- Felippe Vieira Nascimento Silva - 323125784  
- Kauan Guilherme Pinto Dos Santos - 12724228176  
- Osmar Soto da Rosa - RA 12522226221  

## Descrição do Projeto
A API manipula dados de pelo menos duas entidades distintas em um banco de dados relacional (MySQL, PostgreSQL ou SQLite), respeitando todos os constraints da arquitetura REST conforme definido por Roy Fielding:

1. **Client-Server:** Separação entre cliente e servidor.  
2. **Stateless:** Requisições independentes e autocontidas.  
3. **Cacheable:** Respostas indicam possibilidade de cache.  
4. **Uniform Interface:** Interface padronizada e uniforme para recursos.  
5. **Layered System:** Suporte a camadas intermediárias na arquitetura.  
6. **Code on Demand (opcional):** Possibilidade de envio de scripts para o cliente (não implementado neste projeto).

## Endpoints Disponíveis

| Método | Endpoint           | Descrição                          |
|--------|--------------------|----------------------------------|
| GET    | `/entidade`        | Lista todos os registros          |
| GET    | `/entidade/:id`    | Busca registro por ID             |
| POST   | `/entidade`        | Cria novo registro                |
| PUT    | `/entidade/:id`    | Atualiza totalmente um registro   |
| PATCH  | `/entidade/:id`    | Atualiza parcialmente um registro |
| DELETE | `/entidade/:id`    | Remove um registro                |

## Tecnologias Utilizadas
- **Node.js**  
- **Express.js**  
- Banco de dados relacional: MySQL / PostgreSQL / SQLite  
- Comunicação via JSON  

## Como Executar

1. Clone o repositório:  
   ```bash
   git clone https://github.com/KauanGPDS/Projeto-Sistemas-Distribuidos.git
