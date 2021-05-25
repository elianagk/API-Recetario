const { Pool } = require('pg');
const connectionString = 'postgres://unbztqjnngdlgg:c7aa75fb89033b7f5fd5116c1ee2c915d8fbaa86f8df633f00030af124bd6993@ec2-54-224-120-186.compute-1.amazonaws.com:5432/dtn4q695rcj5f'

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized:false
    }
});

//generales
const getUsers = async (req, res)=> {
   const response = await pool.query('SELECT * FROM users');
   res.json(response.rows);
}

const getRecetas = async (req, res)=> {
    const response = await pool.query('SELECT * FROM receta');
    res.json(response.rows);
 }

 const getIngredientes = async (req, res)=> {
    const response = await pool.query('SELECT * FROM ingrediente');
    res.json(response.rows);
 }

 const getCategoria = async (req, res)=> {
    const response = await pool.query('SELECT * FROM categoria');
    res.json(response.rows);
 }

 const getRecetaCategoria = async (req, res)=> {
    const response = await pool.query('SELECT * FROM receta_categoria');
    res.json(response.rows);
 }

 const getRecetaIngrediente = async (req, res)=> {
    const response = await pool.query('SELECT * FROM receta_ingredientes');
    res.json(response.rows);
 }

//Especificos
//Recetas por ingrediente
//Recetas por categoria
//Receta por nombre - id
//Categoria por nombre - id
//ingrediente por id - nombre



module.exports = {
    getUsers,
    getRecetas,
    getCategoria,
    getIngredientes,
    getRecetaCategoria,
    getRecetaIngrediente
}