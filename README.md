1️⃣ Usado:

Node.js

Express.js

Sequelize (ORM para SQL Server)

Dotenv (Gerenciamento de variáveis de ambiente)

Nodemon (Hot reload durante o desenvolvimento)

Biome (Ferramenta para linting e formatação de código)

2️⃣ Instalar Dependências.

No diretório do projeto, execute:

npm install

3️⃣ Configurar Variáveis de Ambiente.

Crie um arquivo .env na raiz do projeto e adicione:

DB_NAME=nome_do_banco
DB_USER=usuario
DB_PASSWORD=senha
DB_HOST=localhost
DB_PORT=1433

4️⃣ Executar o Projeto.

Para rodar o servidor em modo desenvolvimento com Nodemon:

npm run start

A API estará disponível em: http://localhost:3000/api

5️⃣ Rotas da API.

Listar todos os Posts : http://localhost:3000/api/posts
Listar todos os Comentarios : http://localhost:3000/api/comentarios
Criar um Post : http://localhost:3000/api/posts
Apagar um Post : http://localhost:3000/api/posts/{Id do Post}
Adicionar comentario a um post: http://localhost:3000/api/posts/{Id do post}/comentarios
Apagar um comentario : http://localhost:3000/api/comentarios/{Id do comentario}
