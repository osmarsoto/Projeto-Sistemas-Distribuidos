const Livro = require('../models/livro');
const Autor = require('../models/autor');

exports.getAll = async (req, res) => {
  const livros = await Livro.findAll({ include: { model: Autor, as: 'autor' } });
  res.json(livros);
};

exports.getById = async (req, res) => {
  const livro = await Livro.findByPk(req.params.id, { include: { model: Autor, as: 'autor' } });
  livro ? res.json(livro) : res.status(404).json({ error: 'Livro não encontrado' });
};

exports.create = async (req, res) => {
  try {
    const novoLivro = await Livro.create(req.body);
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  if (livro) {
    await livro.update(req.body);
    res.json(livro);
  } else {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};

exports.partialUpdate = async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  if (livro) {
    await livro.update(req.body);
    res.json(livro);
  } else {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};

exports.delete = async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  if (livro) {
    await livro.destroy();
    res.json({ message: 'Livro deletado com sucesso' });
  } else {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
};
