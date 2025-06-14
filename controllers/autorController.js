const Autor = require('../models/autor');

exports.getAll = async (req, res) => {
  const autores = await Autor.findAll();
  res.json(autores);
};

exports.getById = async (req, res) => {
  const autor = await Autor.findByPk(req.params.id);
  autor ? res.json(autor) : res.status(404).json({ error: 'Autor não encontrado' });
};

exports.create = async (req, res) => {
  try {
    const novoAutor = await Autor.create(req.body);
    res.status(201).json(novoAutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const autor = await Autor.findByPk(req.params.id);
  if (autor) {
    await autor.update(req.body);
    res.json(autor);
  } else {
    res.status(404).json({ error: 'Autor não encontrado' });
  }
};

exports.delete = async (req, res) => {
  const autor = await Autor.findByPk(req.params.id);
  if (autor) {
    await autor.destroy();
    res.json({ message: 'Autor deletado com sucesso' });
  } else {
    res.status(404).json({ error: 'Autor não encontrado' });
  }
};
