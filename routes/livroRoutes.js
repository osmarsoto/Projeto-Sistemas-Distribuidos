const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/livros', livroController.getAll);
router.get('/livros/:id', livroController.getById);
router.post('/livros', livroController.create);
router.put('/livros/:id', livroController.update);
router.patch('/livros/:id', livroController.partialUpdate);
router.delete('/livros/:id', livroController.delete);

module.exports = router;
