const { Router } = require('express');
const router = Router();

const { getUsers, getRecetas, getCategorias,getCategoria, getIngredientes,getIngrediente, 
    getRecetaIngrediente, getRecetaCategoria,  getImageReceta, getReceta, getCategoriaReceta, 
    getIngredienteReceta } = require('../controllers/index.controller')

router.get('/users', getUsers);

router.get('/recetas', getRecetas);
router.get('/receta/:id_receta', getReceta);
router.get('/receta/:id_receta/categorias', getRecetaCategoria);
router.get('/receta/:id_receta/categorias/:id_categoria', getCategoria);
router.get('/receta/:id_receta/ingredientes', getRecetaIngrediente);
router.get('/receta/:id_receta/ingredientes/:id_ingrediente', getIngrediente);
router.get('/receta/:id_receta/imagen', getImageReceta);

router.get('/categorias', getCategorias);
router.get('/categoria/:id_categoria', getCategoria);
router.get('/categoria/:id_categoria/recetas', getCategoriaReceta);
router.get('/categoria/:id_categoria/recetas/:id_receta', getReceta);

router.get('/ingredientes', getIngredientes);
router.get('/ingrediente/:id_ingrediente', getIngrediente);
router.get('/ingrediente/:id_ingrediente/receta', getIngredienteReceta);
router.get('/ingrediente/:id_ingrediente/receta/:id_receta', getReceta);




module.exports = router;