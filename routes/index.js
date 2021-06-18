const { Router } = require('express');
const router = Router();
const cors = require('cors');
app.use(cors())
const { getUsers, getRecetas, getCategorias,getCategoria, getIngredientes,getIngrediente, 
    getRecetaIngrediente, getRecetaCategoria,  getImageReceta, getReceta, getCategoriaReceta, 
    getIngredienteReceta } = require('../controllers/index.controller')

router.get('/users', getUsers);
/**
 * @swagger
 * /recetas:
 *  get:
 *    description: Usar para obtener todas las recetas
 *    tags:
 *      - Receta
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error inesperado
 */
router.get('/recetas', getRecetas);
/**
 * @swagger
 * /receta/{id_receta}:
 *  get:
 *    description: Usar para obtener una receta en particular
 *    tags:
 *      - Receta
 *    parameters:
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/receta/:id_receta', getReceta);
/**
 * @swagger
 * /receta/{id_receta}/categorias:
 *  get:
 *    description: Usar para obtener las categorias a las cuales pertenece una receta en particular.
 *    tags:
 *      - Receta
 *    parameters:
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/receta/:id_receta/categorias', getRecetaCategoria);
/**
 * @swagger
 * /receta/{id_receta}/categorias/{id_categorias}:
 *  get:
 *    description: Usar para obtener una categoria a las cual pertenece una receta en particular.
 *    tags:
 *      - Receta
 *    parameters:
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *      - in: path
 *        name: id_categoria
 *        description: id numerica de la categoria
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/receta/:id_receta/categorias/:id_categoria', getCategoria);
/**
 * @swagger
 * /receta/{id_receta}/ingredientes:
 *  get:
 *    description: Usar para obtener los ingredientes de una receta en particular.
 *    tags:
 *      - Receta
 *    parameters:
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/receta/:id_receta/ingredientes', getRecetaIngrediente);
/**
 * @swagger
 * /receta/{id_receta}/ingredientes/{id_ingrediente}:
 *  get:
 *    description: Usar para obtener un ingrediente en particular de una receta en particular.
 *    tags:
 *      - Receta
 *    parameters:
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *      - in: path
 *        name: id_ingrediente
 *        description: id numerica del ingrediente
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/receta/:id_receta/ingredientes/:id_ingrediente', getIngrediente);
/**
 * @swagger
 * /receta/{id_receta}/imagen:
 *  get:
 *    description: Usar para obtener la imagen de una receta en particular
 *    tags:
 *      - Receta
 *    parameters:
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/receta/:id_receta/imagen', getImageReceta);

/**
 * @swagger
 * /categorias:
 *  get:
 *    description: Usar para obtener todas las categorias
 *    tags:
 *      - Categoria
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error inesperado
 */
router.get('/categorias', getCategorias);
/**
 * @swagger
 * /categoria/{id_categoria}:
 *  get:
 *    description: Usar para obtener una categoria en particular
 *    tags:
 *      - Categoria
 *    parameters:
 *      - in: path
 *        name: id_categoria
 *        description: id numerica de la categoria
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/categoria/:id_categoria', getCategoria);
/**
 * @swagger
 * /categoria/{id_categoria}/recetas:
 *  get:
 *    description: Usar para obtener todas las recetas asociadas a una categoria en particular.
 *    tags:
 *      - Categoria
 *    parameters:
 *      - in: path
 *        name: id_categoria
 *        description: id numerica de la categoria
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/categoria/:id_categoria/recetas', getCategoriaReceta);
/**
 * @swagger
 * /categoria/{id_categoria}/recetas/{id_receta}:
 *  get:
 *    description: Usar para obtener una receta asociada a una categoria en particular.
 *    tags:
 *      - Categoria
 *    parameters:
 *      - in: path
 *        name: id_categoria
 *        description: id numerica de la categoria
 *        required: true
 *        schema:
 *          type: integer
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/categoria/:id_categoria/recetas/:id_receta', getReceta);


/**
 * @swagger
 * /ingredientes:
 *  get:
 *    description: Usar para obtener todos los ingredientes
 *    tags:
 *      - Ingrediente
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error inesperado
 */
router.get('/ingredientes', getIngredientes);
/**
 * @swagger
 * /ingrediente/:id_ingrediente:
 *  get:
 *    description: Usar para obtener un ingrediente en particular.
 *    tags:
 *      - Ingrediente
 *    parameters:
 *      - in: path
 *        name: id_ingrediente
 *        description: id numerica del ingrediente
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/ingrediente/:id_ingrediente', getIngrediente);
/**
 * @swagger
 * /ingrediente/{id_ingrediente}/receta:
 *  get:
 *    description: Usar para obtener todas las recetas que contienen un ingrediente en particular.
 *    tags:
 *      - Ingrediente
 *    parameters:
 *      - in: path
 *        name: id_ingrediente
 *        description: id numerica del ingrediente
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/ingrediente/:id_ingrediente/receta', getIngredienteReceta);
/**
 * @swagger
 * /ingrediente/{id_ingrediente}/receta/{id_receta}:
 *  get:
 *    description: Usar para obtener una receta en particular que contenga ese ingrediente en particular.
 *    tags:
 *      - Ingrediente
 *    parameters:
 *      - in: path
 *        name: id_ingrediente
 *        description: id numerica del ingrediente
 *        required: true
 *        schema:
 *          type: integer
 *      - in: path
 *        name: id_receta
 *        description: id numerica de la receta
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: La id especificada es invalida (no es un número)
 *      default:
 *        description: Error inesperado
 */
router.get('/ingrediente/:id_ingrediente/receta/:id_receta', getReceta);




module.exports = router;