// Importing necessary modules: Router function from express module and the query function from the query module.
import { Router } from "express";
// Import a custom utility function for running SQL queries.
import query from "../utils/query.js";

// Creating a Router instance for user-related routes.
const usuarioRouter = Router();

// Endpoint to retrieve all users.
usuarioRouter.get('/', async (req, res) => {
    // Set the HTTP status code to 200 and allow cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL query to select all records from the Usuario table.
    const sql = 'SELECT * FROM Usuario';

    // Execute the query and store the response.
    const response = await query(sql, []);

    // Send the response as JSON and end the response.
    res.json(response[0]);
    res.end();
});

// Endpoint to retrieve user logins.
usuarioRouter.get('/usuarioLogin', async (req, res) => {
    // Set the HTTP status code to 200 and allow cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // SQL query to select all 'login' fields from the Usuario table.
    const sql = 'SELECT login FROM Usuario';
    
    // Execute the query and store the response.
    const response = await query(sql, []);

    // Send the response as JSON.
    res.json(response);
});
  
// Endpoint to retrieve user passwords.
usuarioRouter.get('/senhaUsuario', async (req, res) => {
    // Set the HTTP status code to 200 and allow cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // SQL query to select all 'senha' fields from the Usuario table.
    const sql = 'SELECT senha FROM Usuario';

    // Execute the query and store the response.
    const response = await query(sql, []);

    // Send the response as JSON.
    res.json(response);
});
  
// Endpoint to retrieve user types.
usuarioRouter.get('/tipoUsuario', async (req, res) => {
    // Set the HTTP status code to 200 and allow cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // SQL query to select all 'tipo' fields from the Usuario table.
    const sql = 'SELECT tipo FROM Usuario';

    // Execute the query and store the response.
    const response = await query(sql,[]);

    // Send the response as JSON.
    res.json(response);
});
  
// Endpoint to insert a new user.
usuarioRouter.post('/insereUsuario', async (req, res) => {
    // Set the HTTP status code to 200 and allow cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // SQL query to insert a new record into the Usuario table.
    const sql = "INSERT INTO Usuario (login, senha, tipo) VALUES (?, ?, ?)";

    // Execute the query and store the response.
    const response = await query(sql, [req.body.email, req.body.password, req.body.type]);

    // Redirect to the index page and end the response.
    res.redirect("/index.html");
    res.end();
});

// Export the usuarioRouter instance for use in other parts of the application.
export default usuarioRouter;