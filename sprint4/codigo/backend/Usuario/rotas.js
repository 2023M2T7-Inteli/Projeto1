import { Router } from "express";
import query from "../utils/query.js";

const usuarioRouter = Router();
// Endpoint to retrieve all users
usuarioRouter.get('/', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    const sql = 'SELECT * FROM Usuario';

    const response = await query(sql);

    res.json(response[0]);
    res.end();
});

// Endpoint to retrieve user logins
usuarioRouter.get('/usuarioLogin', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT login FROM Usuario';
    
    const response = await query(sql);


    res.json(response)

  });
  
  // Endpoint to retrieve user passwords
usuarioRouter.get('/senhaUsuario', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT senha FROM Usuario';

    const response = await query(sql);

    res.json(response)
  });
  
  // Endpoint to retrieve user types
usuarioRouter.get('/tipoUsuario', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT tipo FROM Usuario';

    const response = await query(sql);


    res.json(response)
});
  
  // Endpoint to insert a new user
usuarioRouter.post('/insereUsuario', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = "INSERT INTO Usuario (login, senha, tipo) VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.type + "')";
    
    const response = await query(sql);

    res.redirect("/index.html")
    res.end()
});

export default usuarioRouter;