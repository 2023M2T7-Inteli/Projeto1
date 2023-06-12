// Importing necessary modules: Router function from express module and the query function from the query module.
import { Router } from "express";
// Import a custom utility function for running SQL queries.
import query from "../utils/query.js";
// A Router instance is created and assigned to the variable itemRouter.
const itemRouter = Router();

// The itemRouter handles a GET request at the root path. It's used to fetch all records from the Item table.
itemRouter.get('/', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to select all records from the Item table.
    const sql = 'SELECT * FROM Item';

    // The SQL command is executed, and the response is stored.
    const response = await query(sql);

    // The response is sent as JSON.
    res.json(response);
});

// The itemRouter handles a POST request at '/insereItem'. This is used to insert a new record into the Item table.
itemRouter.post('/insereItem', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to insert a new record into the Item table with values from the request body.
    const sql = "INSERT INTO Item (valor, ID_Etapa) VALUES ('" + req.body.valor + "', '" + req.body.ID_Etapa + "')";

    // The SQL command is executed, and the response is stored.
    const response = await query(sql);

    // The client is redirected to the URL provided in the request body.
    res.redirect(req.body.currentUrl);
});

// itemRouter handles a GET request at '/atualizarItem'. It fetches a specific record from the Item table for updating.
itemRouter.get('/atualizarItem', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to select a specific record from the Item table based on the ID in the request query.
    const sql = "SELECT * FROM Item WHERE ID_Item=" + req.query.ID_Item;

    // The SQL command is executed, and the response is stored.
    const response = await query(sql);

    // The response is sent as JSON.
    res.json(response);
});

// itemRouter handles a POST request at '/atualizarItem'. This is used to update a specific record in the Item table.
itemRouter.post('/atualizarItem', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to update a specific record in the Item table based on the ID and values in the request body.
    const sql = "UPDATE Item SET tipo_item='" + req.body.tipo_item + "', valor= '" + req.body.valor + "', status='" + req.body.status + "'  WHERE ID_Item=" + req.body.ID_Item;

    // The SQL command is executed, and the response is stored.
    const response = await query(sql);

    // The response is sent as JSON.
    res.json(response);
});

// itemRouter handles a POST request at '/removeItem'. This is used to delete a specific record from the Item table.
itemRouter.post('/removeItem', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to delete a specific record from the Item table based on the ID in the request query.
    const sql = "DELETE FROM Item WHERE ID_Item='" + req.query.ID_Item + "'";

    // The SQL command is executed, and the response is stored.
    const response = await query(sql);

    // The response is sent as JSON.
    res.json(response);
});

// itemRouter is exported for use in other parts of the application.
export default itemRouter;
