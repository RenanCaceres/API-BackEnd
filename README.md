# 📋 API REST — Gerenciamento de Tarefas

> API REST para gerenciamento de tarefas desenvolvida com Node.js e Express.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 👤 Informações do Aluno

| Campo | Dados |
|---|---|
| Nome | Renan Cáceres Anselmo |
| RA | 2525526 |

---

## 🚀 Como Executar

**1. Instalar as dependências:**
```bash
npm install
```

**2. Iniciar o servidor:**
```bash
node app.js
```

**3. Acessar a API em:**
```
http://localhost:3000
```

---

## 🛣️ Rotas Disponíveis

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/tasks/:id` | Busca tarefa por ID |
| `POST` | `/tasks` | Cria nova tarefa |
| `PUT` | `/tasks/:id` | Atualiza tarefa completa |
| `PATCH` | `/tasks/:id` | Atualiza tarefa parcialmente |
| `DELETE` | `/tasks/:id` | Remove tarefa |

---

## 📦 Status Codes

| Código | Significado |
|---|---|
| `200` | Sucesso |
| `201` | Recurso criado |
| `204` | Exclusão sem conteúdo |
| `400` | Requisição inválida |
| `404` | Recurso não encontrado |
| `500` | Erro interno do servidor |

---

## 🧪 Testando com Postman

### GET — Listar todas as tarefas
```
GET http://localhost:3000/tasks
```

### GET — Buscar por ID
```
GET http://localhost:3000/tasks/1
```

### POST — Criar tarefa
```
POST http://localhost:3000/tasks
```
Body (raw → JSON):
```json
{
  "description": "Estudar APIs REST"
}
```

### PUT — Atualizar tarefa completa
```
PUT http://localhost:3000/tasks/1
```
Body (raw → JSON):
```json
{
  "description": "Estudar Node.js e Express"
}
```

### PATCH — Atualizar parcialmente
```
PATCH http://localhost:3000/tasks/1
```
Body (raw → JSON):
```json
{
  "description": "Só esse campo foi alterado"
}
```

### DELETE — Remover tarefa
```
DELETE http://localhost:3000/tasks/1
```

---

## 💡 Desafios Extras Implementados

- ✅ Rota PATCH
- ✅ Middleware de logs
- ✅ Persistência em arquivo JSON (`db.json`)
- ✅ Validação de campos obrigatórios

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
