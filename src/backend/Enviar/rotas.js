// Import the Router functionality from Express to handle HTTP requests.
import { Router } from "express";

// Import a custom utility function for querying the database.
import query from "../utils/query.js";

// Create a new Router instance for managing 'Enviar' endpoints.
const enviarRouter = Router();

// Define an asynchronous function to handle GET requests at the root endpoint ('/') of 'enviarRouter'.
enviarRouter.get('/', async (req, res) => {

    // Set the status code of the response to 200, indicating success.
    res.statusCode = 200;

    // Set the CORS policy on the response to allow any origin to access this resource.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Define a SQL query to get data from 'Enviar' table.
    const sql = 'SELECT * FROM Enviar';

    // Execute the SQL query using the imported 'query' function.
    const response = await query(sql, []);

    // Send the result of the SQL query back in the response.
    res.json(response);
});

// Define an asynchronous function to handle POST requests at the '/insereEnviar' endpoint of 'enviarRouter'.
enviarRouter.post('/insereEnviar', async (req, res) => {

    // Set the status code of the response to 200, indicating success.
    res.statusCode = 200;

    // Set the CORS policy on the response to allow any origin to access this resource.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Prepare an SQL query to insert a new record into the 'Enviar' table. The values are extracted from the request body.
    const sql = "INSERT INTO Enviar (ID_Protocolo, ID_Usuario, ID_Envio) VALUES (?, ?, ?)";

    // Execute the SQL query using the imported 'query' function.
    const response = await query(sql, [req.body.ID_Protocolo, req.body.ID_Usuario, req.body.ID_Envio]);

    // Redirect the client to the URL specified in the request body.
    res.redirect(req.body.currentUrl);
});

// Export the 'enviarRouter' to be used in other parts of the application.
export default enviarRouter;
