import { Router } from "express";
import query from "../utils/query.js";

const userRouter = Router();
// Endpoint to retrieve all users
userRouter.get('/', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    const sql = 'SELECT * FROM Usuario';

    const response = await query(sql);

    res.json(response[0]);
    res.end();
});

// Endpoint to retrieve user logins
userRouter.get('/userLogin', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT login FROM Usuario';
    
    const response = await query(sql);


    res.json(response)

  });
  
  // Endpoint to retrieve user passwords
userRouter.get('/userPassword', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT senha FROM Usuario';

    const response = await query(sql);

    res.json(response)
  });
  
  // Endpoint to retrieve user types
userRouter.get('/userType', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = 'SELECT tipo FROM Usuario';

    const response = await query(sql);


    res.json(response)
});
  
  // Endpoint to insert a new user
userRouter.post('/userInsert', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const sql = "INSERT INTO Usuario (login, senha, tipo) VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.type + "')";
    
    const response = await query(sql);


    res.redirect("/index.html")
    res.end()
});

export default userRouter;