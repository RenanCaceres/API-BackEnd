=====================================
  ATIVIDADE - CAP20 | API REST Node.js
=====================================

Nome: Renan Cáceres Anselmo
RA: 2525526

-------------------------------------
DESCRIÇÃO
-------------------------------------
API REST para gerenciamento de tarefas
desenvolvida com Node.js e Express.

-------------------------------------
COMO EXECUTAR O PROJETO
-------------------------------------

1. Instalar as dependências:
   npm install

2. Iniciar o servidor:
   node app.js

3. Acessar a API em:
   http://localhost:3000

-------------------------------------
ROTAS DISPONÍVEIS
-------------------------------------

GET    /tasks        → Lista todas as tarefas
GET    /tasks/:id    → Busca tarefa por ID
POST   /tasks        → Cria nova tarefa
PUT    /tasks/:id    → Atualiza tarefa por ID
DELETE /tasks/:id    → Remove tarefa por ID

-------------------------------------
EXEMPLO DE JSON PARA POST/PUT
-------------------------------------

{
  "description": "Estudar APIs REST"
}

-------------------------------------
TECNOLOGIAS UTILIZADAS
-------------------------------------
- Node.js
- Express

=====================================