const app = require('./app');
const { connectToDatabase } = require('./database/database');

const PORT = 3000;

async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startServer();