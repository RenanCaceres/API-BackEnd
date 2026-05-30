const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Tasks API',
    description: 'API de gerenciamento de tarefas'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./app.js'];

swaggerAutogen(outputFile, routes, doc);