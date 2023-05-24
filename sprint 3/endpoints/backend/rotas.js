import { Router } from "express";

import etapaRouter from "./Etapa/rotas.js";
import itemRouter from "./Item/rotas.js";
import projetoRouter from "./Projeto/rotas.js";
import protocoloRouter from "./Protocolo/rotas.js";
import fotoRouter from "./Foto/rotas.js";
import usuarioRouter from "./Usuario/rotas.js";
import alocacaoRouter from "./Alocacao/rotas.js";

/* Criação do roteador */
const routes = Router();
//Rota raiz

routes.use("/etapa", etapaRouter)
routes.use("/projeto", projetoRouter)
routes.use("/item", itemRouter)
routes.use("/protocolo", protocoloRouter)
routes.use("/foto", fotoRouter)
routes.use("/usuario", usuarioRouter)
routes.use("alocacao",alocacaoRouter)

export default routes;

