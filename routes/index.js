const { Router } = require('express');
const router = Router();

const { getUsers, getRecetas, getCategorias,getCategoria, getIngredientes,getIngrediente, getRecetaIngrediente, getRecetaCategoria,  getImageReceta, getReceta } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/recetas', getRecetas);
router.get('/receta/:id_receta', getReceta);
router.get('/categorias', getCategorias);
router.get('/ingredientes', getIngredientes);
router.get('/recetacategoria/:id_receta', getRecetaCategoria);
router.get('/recetaingredientes/:id_receta', getRecetaIngrediente);
router.get('/imagen/:id_receta', getImageReceta);
router.get('/categoria', getCategoria);
router.get('/ingrediente', getIngrediente);





module.exports = router;