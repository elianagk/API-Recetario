const express = require('express');
const PORT = process.env.PORT || 5000
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(require('./routes/index'));
app.use(cors());
app.listen(PORT);

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Frozen sea Recipes API",
        version: "1.0.0",
        description:
          "Documentación del Recetario API",
        contact: {
          name: "Eliana Kohon",
        },
      },
      servers: [
        {
          url: "https://iawek-servicio-web.herokuapp.com",
        },
      ],
    },
    apis: ["./routes/index.js"],
  };
  
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
 