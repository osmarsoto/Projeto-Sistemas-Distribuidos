const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Importar as rotas
const livroRoutes = require('./routes/livroRoutes');
const autorRoutes = require('./routes/autorRoutes'); // NOVO

app.use(express.json());

// Middleware de cache opcional
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=300');
  next();
});

// Rotas
app.use('/api', livroRoutes);
app.use('/api', autorRoutes); // NOVO

// Conectar ao banco
sequelize.authenticate()
  .then(() => console.log('🟢 Banco de dados conectado!'))
  .catch(err => console.error('🔴 Erro na conexão do banco:', err));

// Sincronizar modelos
sequelize.sync().then(() => {
  console.log('🗄️  Banco sincronizado!');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
