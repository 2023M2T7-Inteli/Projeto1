// The express module's Router function is imported.
import { Router } from "express";

// Different routers are imported from various routes.
import etapaRouter from "./Etapa/rotas.js";
import itemRouter from "./Item/rotas.js";
import projetoRouter from "./Projeto/rotas.js";
import protocoloRouter from "./Protocolo/rotas.js";
import fotoRouter from "./Foto/rotas.js";
import alocacaoRouter from "./alocacao/rotas.js";
import usuarioRouter from "./Usuario/rotas.js";
import enviarRouter from "./Enviar/rotas.js";

/* Router creation */
const routes = Router();

// Specific routers for different routes

routes.use("/usuario", usuarioRouter);
// The "usuarioRouter" is used for handling requests to the "/etapa" route, this router handles operations related to "Usuario"

routes.use("/enviar", enviarRouter);
// The "enviarRouter" is used for handling requests to the "/etapa" route, this router handles operations related to "Enviar"

routes.use("/etapa", etapaRouter);
// The "etapaRouter" is used for handling requests to the "/etapa" route, this router handles operations related to "Etapa"

routes.use("/projeto", projetoRouter);
// The "projetoRouter" is used for handling requests to the "/projeto" route, this router handles operations related to "Projeto"

routes.use("/item", itemRouter);
// The "itemRouter" is used for handling requests to the "/item" route, this router handles operations related to "Item"

routes.use("/protocolo", protocoloRouter);
// The "protocoloRouter" is used for handling requests to the "/protocolo" route, this router handles operations related to "Protocolo"

routes.use("/foto", fotoRouter);
// The "fotoRouter" is used for handling requests to the "/foto" route, this router handles operations related to "Foto"

routes.use("/alocacao", alocacaoRouter);
// The "alocacaoRouterr" is used for handling requests to the "/alocacao" route, this router handles operations related to "Alocacao"

// Export routes for use in other parts of the application
export default routes;
