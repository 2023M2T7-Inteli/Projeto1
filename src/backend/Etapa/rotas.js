// Import the Router function from Express to create a new router.
import { Router } from "express";

// Import the query function from a utility module, used to run SQL queries.
import query from "../utils/query.js";

// Create a new router for 'Etapa' endpoints.
const etapaRouter = Router();

// Define an endpoint for a GET request at the root of 'etapaRouter'. It fetches all records from the 'Etapa' table.
etapaRouter.get('/', async (req, res) => {
    // Set the status code to 200 to indicate a successful request.
    res.statusCode = 200;

    // Allow requests from any origin (CORS policy).
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL query to fetch all records from the 'Etapa' table.
    const sql = 'SELECT * FROM Etapa';

    // Execute the SQL query and await the response.
    const response = await query(sql);

    // Send the SQL query result as a JSON response.
    res.json(response);
});

// Define an endpoint for a POST request at '/insereEtapa'. It creates a new record in the 'Etapa' table.
etapaRouter.post('/insereEtapa', async (req, res) => {
    // Set the status code to 200 to indicate a successful request.
    res.statusCode = 200;

    // Allow requests from any origin (CORS policy).
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL query to insert a new record into the 'Etapa' table. Values come from the request body.
    const sql = "INSERT INTO Etapa (nome, status, ID_Protocolo) VALUES ('" + req.body.nome + "', '" + req.body.status + "', '" + req.body.ID_Protocolo + "')";

    // Execute the SQL query and await the response.
    const response = await query(sql);

    // Redirect the client to a new form page, passing the protocol ID as a query parameter.
    res.redirect("/html/newForm.html?id=" + req.body.ID_Protocolo);
});

// Define an endpoint for a GET request at '/alocaItem'. It fetches all records from the 'Etapa' table and joins them with the 'Item' table based on 'ID_Item'.
etapaRouter.get('/alocaItem', async(req, res) => {
    // Set the status code to 200 to indicate a successful request.
    res.statusCode = 200;

    // Allow requests from any origin (CORS policy).
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL query to fetch and join records from 'Etapa' and 'Item' tables.
    const sql = 'SELECT * FROM Etapa INNER JOIN Item ON Etapa.ID_Item = Item.id';

    // Execute the SQL query and await the response.
    const response = await query(sql);

    // Send the SQL query result as a JSON response.
    res.json(response);
});

// Export the 'etapaRouter' for use in other parts of the application.
export default etapaRouter;
