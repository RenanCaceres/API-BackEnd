const express = require('express');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const app = express();
const swaggerDocument = require('./swagger.json');
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(express.json());

// Banco de dados em arquivo JSON
function carregarTasks() {
  return JSON.parse(fs.readFileSync('./db.json', 'utf-8')).tasks;
}

function salvarTasks() {
  fs.writeFileSync('./db.json', JSON.stringify({ tasks }, null, 2));
}

let tasks = carregarTasks();

// Log de requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// GET - todas as tarefas
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// GET - tarefa por ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

  res.status(200).json(task);
});

// POST - criar tarefa
app.post('/tasks', (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({ error: 'Campo description é obrigatório' });
  }

  const task = {
    id: tasks.length + 1,
    description: req.body.description
  };

  tasks.push(task);
  salvarTasks();

  res.status(201).json(task);
});

// PUT - atualizar tarefa completa
app.put('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ error: 'Tarefa não encontrada' });

  tasks[index] = { id: tasks[index].id, description: req.body.description };
  salvarTasks();

  res.status(200).json(tasks[index]);
});

// PATCH - atualizar tarefa parcialmente
app.patch('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

  Object.assign(task, req.body);
  salvarTasks();

  res.status(200).json(task);
});

// DELETE - remover tarefa
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ error: 'Tarefa não encontrada' });

  tasks.splice(index, 1);
  salvarTasks();

  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});