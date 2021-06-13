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
   try{
      const response = await pool.query('SELECT * FROM users');
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }
}

const getRecetas = async (req, res)=> {
   const response = await pool.query('SELECT * FROM receta');
   response.rows.forEach(receta => {
      receta.image = "https://iawek-servicio-web.herokuapp.com/receta/"+receta.id_receta+"/imagen"
   })
   res.json(response.rows);
   
 }
 const getReceta = async (req, res)=> {
   try{
   const id = req.params.id_receta;
   const response = await pool.query('SELECT * FROM receta WHERE id_receta = $1', [id]);
   response.rows[0].image = "https://iawek-servicio-web.herokuapp.com/receta/"+id+"/imagen"
   res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
}

}

 const getIngredientes = async (req, res)=> {
   const response = await pool.query('SELECT * FROM ingrediente');
   res.json(response.rows);
 }

 const getIngrediente = async (req, res)=> {
   try{
      const id = req.params.id_ingrediente;
      const response = await pool.query('SELECT * FROM ingrediente WHERE id_ingrediente=$1',[id]);
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }
   
}

 const getCategorias = async (req, res)=> {
   const response = await pool.query('SELECT * FROM categoria');
   res.json(response.rows);
 }
 const getCategoria = async (req, res)=> {
    try{
      const id = req.params.id_categoria;
      const response = await pool.query('SELECT * FROM categoria WHERE id_categoria=$1',[id]);
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }

}

 const getRecetaCategoria = async (req, res)=> {
   try{
      const id = req.params.id_receta;
      const response = await pool.query('SELECT * FROM receta_categoria WHERE id_receta=$1',[id]);
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }
 }

 const getCategoriaReceta = async (req, res)=> {
    try{
      const id = req.params.id_categoria;
      const response = await pool.query('SELECT * FROM receta_categoria WHERE id_categoria=$1',[id]);
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }
 }



 const getRecetaIngrediente = async (req, res)=> {
    try{
      const id = req.params.id_receta;
      const response = await pool.query('SELECT * FROM receta_ingredientes WHERE id_receta=$1',[id]);
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }
 }

 const getIngredienteReceta = async (req, res)=> {
   try{
      const id = req.params.id_ingrediente;
      const response = await pool.query('SELECT * FROM receta_ingredientes WHERE id_ingrediente=$1',[id]);
      res.json(response.rows);
   }catch(err){
      res.status(400).send({
         "name": "Sintaxis incorrecta",
         "message": "La sintaxis que uso no es correcta.",
         "code": 0,
         "status": 400
      });
   }
}

 const getImageReceta =  async (req, res) => {
    try{
      const fs = require('fs');
      const response = await pool.query("SELECT encode(image,'base64') FROM receta where id_receta = $1", [req.params.id_receta]);
      var respuesta=Buffer.from(response.rows[0].encode,'base64');
      var rta=respuesta.toString('utf-8');
      let buff = Buffer.from(rta, 'base64');
      fs.writeFileSync('image.jpg', buff, function(err) {
         console.log('File created');
      });
      const mimeType = 'image/jpg';
            res.writeHead(200, { 'Content-Type': mimeType });
            res.write(buff);
            res.end();
   }catch(err){
      res.status(404).send({
          "name": "Not Found Exception",
          "message": "The requested resource was not found.",
          "code": 0,
          "status": 404
      });
  }
   
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
    getCategoria,
    getCategoriaReceta
}