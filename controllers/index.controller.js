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
    const response = await pool.query('SELECT id_receta, nombre, descripcion, recomendacion, comensales, tiempo_coccion, dificultad FROM receta');
    res.json(response.rows);
 }
 const getReceta = async (req, res)=> {
   const id = req.params.id_receta;
   const response = await pool.query('SELECT id_receta, nombre, descripcion, recomendacion, comensales, tiempo_coccion, dificultad FROM receta WHERE id_receta = $1', [id]);
   res.json(response.rows);
}

 const getIngredientes = async (req, res)=> {
    const response = await pool.query('SELECT * FROM ingrediente');
    res.json(response.rows);
 }

 const getIngrediente = async (req, res)=> {
   const id = req.params.id_ingrediente;
   const response = await pool.query('SELECT * FROM ingrediente WHERE id_ingrediente=$1',[id]);
   res.json(response.rows);
}

 const getCategorias = async (req, res)=> {
    const response = await pool.query('SELECT * FROM categoria');
    res.json(response.rows);
 }
 const getCategoria = async (req, res)=> {
   const id = req.params.id_categoria;
   const response = await pool.query('SELECT * FROM categoria WHERE id_categoria=$1',[id]);
   res.json(response.rows);
}

 const getRecetaCategoria = async (req, res)=> {
   const id = req.params.id_receta;
    const response = await pool.query('SELECT * FROM receta_categoria WHERE id_receta=$1',[id]);
    res.json(response.rows);
 }

 const getRecetaIngrediente = async (req, res)=> {
    const id = req.params.id_receta;
    const response = await pool.query('SELECT * FROM receta_ingredientes WHERE id_receta=$1',[id]);
    res.json(response.rows);
 }

 const getIngredienteReceta = async (req, res)=> {
   const id = req.params.id_ingrediente;
   const response = await pool.query('SELECT * FROM receta_ingredientes WHERE id_ingrediente=$1',[id]);
   res.json(response.rows);
}

 const getImageReceta =  async (req, res) => {
   const fs = require('fs');
   const response = await pool.query("SELECT encode(image,'base64') FROM receta where id_receta = $1", [req.params.id_receta]);
   var respuesta=Buffer.from(response.rows[0].encode,'base64');
   var rta=respuesta.toString('utf-8');
   fs.writeFileSync('image.jpg', rta, function(err) {
       console.log('File created');
   });
   const mimeType = 'image/png';

   res.send(`<img src="data:${mimeType};base64,${rta}"/>`);
};





module.exports = {
    getUsers,
    getRecetas,
    getCategorias,
    getIngredientes,
    getRecetaCategoria,
    getRecetaIngrediente,
    getImageReceta,
    getIngredienteReceta,
    getReceta,
    getIngrediente,
    getCategoria
}