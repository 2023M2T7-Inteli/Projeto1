// Import the Router functionality from Express to handle HTTP requests.
import { Router } from "express";

// Import a custom utility function for querying the database.
import query from "../utils/query.js";

// Create a new Router instance for managing 'Alocacao' endpoints.
const alocacaoRouter = Router();

// Define an asynchronous function to handle GET requests at the root endpoint ('/') of 'alocacaoRouter'.
alocacaoRouter.get('/', async (req, res) => {

    // Set the status code of the response to 200, indicating success.
    res.statusCode = 200;

    // Set the CORS policy on the response to allow any origin to access this resource.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Define a SQL query to get data from 'Alocacao', 'Usuario', and 'Projeto' tables.
    const sql = 'SELECT * FROM Alocacao INNER JOIN Usuario ON Alocacao.ID_Usuario = Usuario.id INNER JOIN Projeto ON Alocacao.ID_Projeto = Projeto.id;';

    // Execute the SQL query using the imported 'query' function.
    const response = await query(sql);

    // Send the result of the SQL query back in the response.
    res.json(response);
});

// Export the 'alocacaoRouter' to be used in other parts of the application.
export default alocacaoRouter;
