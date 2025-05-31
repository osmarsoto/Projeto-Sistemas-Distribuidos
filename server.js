const express = require('express');
const app = express();
const sequelize = require('./config/database');
const livroRoutes = require('./routes/livroRoutes');

app.use(express.json());

// Cache middleware opcional
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=300');
  next();
});

app.use('/api', livroRoutes);

sequelize.authenticate()
  .then(() => console.log('🟢 Banco de dados conectado!'))
  .catch(err => console.error('🔴 Erro na conexão do banco:', err));

sequelize.sync().then(() => {
  console.log('🗄️  Banco sincronizado!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
