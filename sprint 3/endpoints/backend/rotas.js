import { Router } from "express";

import produtorRouter from "./Produtores/rotas.js";
import pesquisadorRouter from "./Produtores/rotas.js";

/* Criação do roteador */
const routes = Router();
//Rota raiz

routes.use("/produtor", produtorRouter)
routes.use("/pesquisador", pesquisadorRouter)

export default routes;

