const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Autor = require('./autor');

const Livro = sequelize.define('Livro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  autor_id: { // 👈 definindo a foreign key explicitamente
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'autores',
      key: 'id',
    },
  },
}, {
  tableName: 'livros',
  timestamps: false,
});

// Relacionamento
Livro.belongsTo(Autor, { foreignKey: 'autor_id', as: 'autor' });
Autor.hasMany(Livro, { foreignKey: 'autor_id', as: 'livros' });

module.exports = Livro;
