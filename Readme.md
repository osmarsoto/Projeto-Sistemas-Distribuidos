Projeto A3 - API RESTful com Banco de Dados
Disciplina: Sistemas Distribuídos
Instituição: [Seu nome de faculdade aqui, se desejar incluir]

👨‍💻 Integrantes
Felippe Vieira Nascimento Silva – RA: 323125784

Kauan Guilherme Pinto Dos Santos – RA: 12724228176

Osmar Soto da Rosa – RA: 12522226221

📄 Descrição do Projeto
Este repositório contém o desenvolvimento de uma API RESTful criada para fins acadêmicos, com operações de CRUD sobre as entidades Livro e Autor. O projeto segue os princípios da arquitetura REST, acessando e manipulando dados em um banco de dados relacional (MySQL).

⚙️ Tecnologias Utilizadas
Node.js

Express

MySQL

Insomnia (para testes de requisições HTTP)

🔁 Funcionalidades da API
A API foi construída com os seguintes endpoints para cada entidade:

📘 Livros (/api/livros)
Método	Endpoint	Descrição
GET	/api/livros	Lista todos os livros
GET	/api/livros/:id	Busca um livro por ID
POST	/api/livros	Cria um novo livro
PUT	/api/livros/:id	Atualiza todos os campos do livro
PATCH	/api/livros/:id	Atualiza parcialmente um livro
DELETE	/api/livros/:id	Deleta um livro

✍️ Autores (/api/autores)
Método	Endpoint	Descrição
GET	/api/autores	Lista todos os autores
GET	/api/autores/:id	Busca um autor por ID
POST	/api/autores	Cria um novo autor
PUT	/api/autores/:id	Atualiza todos os campos do autor
DELETE	/api/autores/:id	Deleta um autor

🛠️ Arquitetura REST Implementada
O projeto foi desenvolvido conforme os 6 constraints da arquitetura REST, descritos por Roy Fielding:

Client-Server: Separação entre cliente e servidor

Stateless: Cada requisição contém todas as informações necessárias

Cacheable: Respostas com possibilidade de cache (quando aplicável)

Interface Uniforme: Uso de rotas e convenções padronizadas

Sistema em Camadas: Suporte a camadas intermediárias (quando necessário)

Code-on-Demand (opcional): Não implementado neste projeto

🧪 Testes
As requisições à API foram testadas utilizando o software Insomnia, simulando operações completas de CRUD para as entidades propostas.

