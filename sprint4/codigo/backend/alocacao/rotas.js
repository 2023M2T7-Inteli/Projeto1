import { Router } from "express";
import query from "../utils/query.js";
const alocacaoRouter = Router();

alocacaoRouter.get('/', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT * FROM Alocacao INNER JOIN Usuario ON Alocacao.ID_Usuario = Usuario.id INNER JOIN Projeto ON Alocacao.ID_Projeto = Projetos.id;';
    
    const response = await query(sql);
	
    res.json(response)
  });

  export default alocacaoRouter;