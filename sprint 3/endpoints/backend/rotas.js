import { Router } from "express";

import produtorRouter from "./Produtores/rotas.js";
import pesquisadorRouter from "./Pesquisador/rotas.js";
import etapaRouter from "./Etapa/rotas.js";
import itemRouter from "./Item/rotas.js";
import projetoRouter from "./Projeto/rotas.js";
import protocoloRouter from "./Protocolo/rotas.js";
import fotoRouter from "./Foto/rotas.js";

/* Criação do roteador */
const routes = Router();
//Rota raiz

routes.use("/produtor", produtorRouter)
routes.use("/pesquisador", pesquisadorRouter)
routes.use("/etapa", etapaRouter)
routes.use("/projeto", projetoRouter)
routes.use("/item", itemRouter)
routes.use("/protocolo", protocoloRouter)
routes.use("/foto", fotoRouter)

export default routes;

