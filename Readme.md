# Projeto A3 - Sistemas Distribuídos  
API RESTful com Acesso a Banco de Dados

## Integrantes:
- Felippe Vieira Nascimento Silva - RA: 323125784  
- Kauan Guilherme Pinto dos Santos - RA: 12724228176  
- Osmar Soto da Rosa - RA: 12522226221  

## Descrição do Projeto
Este projeto consiste na construção de uma API RESTful com operações completas de CRUD, utilizando Node.js com Express e banco de dados MySQL. O sistema foi desenvolvido seguindo os princípios da arquitetura REST e permite o gerenciamento de dados de livros e autores.

## Tecnologias Utilizadas
- Node.js  
- Express  
- MySQL  
- Insomnia (para testes de requisições)

## Entidades e Rotas

### 📚 Rotas de Livros (`/api/livros`)
| Método | Rota              | Descrição                          |
|--------|-------------------|------------------------------------|
| GET    | `/api/livros`     | Lista todos os livros              |
| GET    | `/api/livros/:id` | Busca um livro por ID              |
| POST   | `/api/livros`     | Cria um novo livro                 |
| PUT    | `/api/livros/:id` | Atualiza todos os campos de um livro |
| PATCH  | `/api/livros/:id` | Atualiza parcialmente um livro     |
| DELETE | `/api/livros/:id` | Deleta um livro                    |

### ✍️ Rotas de Autores (`/api/autores`)
| Método | Rota               | Descrição                            |
|--------|--------------------|--------------------------------------|
| GET    | `/api/autores`     | Lista todos os autores               |
| GET    | `/api/autores/:id` | Busca um autor por ID                |
| POST   | `/api/autores`     | Cria um novo autor                   |
| PUT    | `/api/autores/:id` | Atualiza todos os campos de um autor |
| DELETE | `/api/autores/:id` | Deleta um autor                      |

## Requisitos REST Implementados
- **Client-Server:** Separação entre frontend e backend.  
- **Stateless:** Cada requisição contém todas as informações necessárias.  
- **Cacheable:** Respostas podem ser cacheadas (quando aplicável).  
- **Uniform Interface:** Interface consistente seguindo convenções REST.  
- **Layered System:** Arquitetura em camadas.  


## Como Executar
1. Clone o repositório:  
   `git clone https://github.com/KauanGPDS/Projeto-Sistemas-Distribuidos.git`
2. Instale as dependências:  
   `npm install`
3. Configure o banco de dados MySQL conforme o modelo no projeto.
4. Inicie o servidor:  
   `node index.js`