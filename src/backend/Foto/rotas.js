// Importing necessary modules: Router function from express module and the query function from the query module.
import { Router } from "express";
// Import a custom utility function for running SQL queries.
import query from "../utils/query.js";

// A new Router instance is created and assigned to fotoRouter.
const fotoRouter = Router();

// fotoRouter handles a GET request at the root path. It fetches all records from the Foto table.
fotoRouter.get('/', async(req, res) => {
    // Sets HTTP status code to 200 and allows cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL command to select all records from the Foto table.
    const sql = 'SELECT * FROM Foto';

    // Executes the query and stores the response.
    const response = await query(sql);

    // Sends the response as JSON.
    res.json(response);
});

// fotoRouter handles a POST request at '/insereFoto'. It creates a new record in the Foto table.
fotoRouter.post('/insereFoto', async (req, res) => {
    // Sets HTTP status code to 200 and allows cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL command to insert a new record into the Foto table using values from the request body.
    const sql = "INSERT INTO Foto (tipo_de_foto, valor) VALUES ('" + req.body.tipo_de_foto + "', '" + req.body.valor + "')";

    // Executes the query and stores the response.
    const response = await query(sql);

    // Sends the response as JSON and ends the response process.
    res.json(response);
    res.end();
});

// fotoRouter handles a GET request at '/atualizarFoto'. It retrieves a specific record from the Foto table for updating.
fotoRouter.get('/atualizarFoto', async (req, res) => {
    // Sets HTTP status code to 200 and allows cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL command to select a specific record from the Foto table.
    const sql = "SELECT * FROM Foto WHERE ID_Foto=" + req.query.ID_Foto;

    // Executes the query and stores the response.
    const response = await query(sql);

    // Sends the response as JSON.
    res.json(response);
});

// fotoRouter handles a POST request at '/atualizarFoto'. It updates a specific record in the Foto table.
fotoRouter.post('/atualizarFoto', async (req, res) => {
    // Sets HTTP status code to 200 and allows cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL command to update a specific record in the Foto table.
    const sql = "UPDATE Foto SET tipo_de_foto='" + req.body.tipo_de_item + "', valor= '" + req.body.valor + "'  WHERE ID_Item=" + req.body.ID_Item;

    // Executes the query and stores the response.
    const response = await query(sql);

    // Sends the response as JSON.
    res.json(response);
});

// fotoRouter handles a GET request at '/removeFoto'. It deletes a specific record from the Foto table.
fotoRouter.get('/removeFoto', async (req, res) => {
    // Sets HTTP status code to 200 and allows cross-origin requests.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // SQL command to delete a specific record from the Foto table.
    const sql = "DELETE FROM Foto WHERE ID_Foto='" + req.query.ID_Foto + "'";

    // Executes the query and stores the response.
    const response = await query(sql);

    // Sends the response as JSON.
    res.json(response);
});

// Exports the fotoRouter to be used in other parts of the application.
export default fotoRouter;