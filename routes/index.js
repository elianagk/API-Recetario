const { Router } = require('express');
const router = Router();

const { getUsers, getRecetas, getCategoria, getIngredientes, getRecetaIngrediente, getRecetaCategoria } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/recetas', getRecetas);
router.get('/categorias', getCategoria);
router.get('/ingredientes', getIngredientes);
router.get('/recetacategoria', getRecetaCategoria);
router.get('/recetaingredientes', getRecetaIngrediente);




module.exports = router;