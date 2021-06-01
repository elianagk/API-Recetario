const { Router } = require('express');
const router = Router();

const { getUsers, getRecetas, getCategorias,getCategoria, getIngredientes,getIngrediente, 
    getRecetaIngrediente, getRecetaCategoria,  getImageReceta, getReceta, getCategoriaReceta, 
    getIngredienteReceta } = require('../controllers/index.controller')

router.get('/users', getUsers);

router.get('/recetas', getRecetas);
router.get('/receta/:id_receta', getReceta);
router.get('/recetacategoria/:id_receta', getRecetaCategoria);
router.get('/recetaingredientes/:id_receta', getRecetaIngrediente);
router.get('/imagen/:id_receta', getImageReceta);

router.get('/categorias', getCategorias);
router.get('/categoria/:id_categoria', getCategoria);
router.get('/categoriareceta/:id_categoria', getCategoriaReceta);

router.get('/ingredientes', getIngredientes);
router.get('/ingrediente/:id_ingrediente', getIngrediente);
router.get('/ingredientesreceta/:id_ingrediente', getIngredienteReceta);




module.exports = router;