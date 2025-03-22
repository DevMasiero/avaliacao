const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    },
  }
);

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados feita com sucesso!.');
    await sequelize.sync({ force: false });
    console.log('Sincrozinação feita');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados SQL Server:', error);
  }
}

module.exports = { sequelize, connectToDatabase };