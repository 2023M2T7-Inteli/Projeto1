import express from "express";
import routes from "./routes.js";

const hostname = "localhost";
const port = 3001;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Aplica as rotas */
app.use(routes);

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});