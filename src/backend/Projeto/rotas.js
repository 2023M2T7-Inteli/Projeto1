// Importing necessary modules: Router function from express module and the query function from the query module.
import { Router } from "express";
// Import a custom utility function for running SQL queries.
import query from "../utils/query.js";

// A Router instance is created and assigned to the variable projetoRouter.
const projetoRouter = Router();

// The projetoRouter handles a GET request at the root path. It's used to fetch all records from the Projeto table.
projetoRouter.get('/', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to select all records from the Projeto table.
    const sql = 'SELECT * FROM Projeto';

    // The SQL command is executed, and the response is stored.
    const response = await query(sql , []);

    // The response is sent as JSON.
    res.json(response);
});

// The projetoRouter handles a POST request at '/insereProjeto'. This is used to insert a new record into the Projeto table.
projetoRouter.post('/insereProjeto', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to insert a new record into the Projeto table with values from the request body.
    const sql = "INSERT INTO Projeto (nome, ativo) VALUES (?, ?)";

    // The SQL command is executed, and the response is stored.
    const response = await query(sql, [req.body.nome, req.body.ativo]);

    // The response is sent as JSON.
    res.json(response);
});

// projetoRouter handles a POST request at '/atualizarProjeto'. It fetches a specific record from the Projeto table for updating.
projetoRouter.post('/atualizarProjetoGet', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to select a specific record from the Projeto table based on the ID in the request body.
    const sql = "SELECT * FROM Projeto WHERE ID_Projeto= ?";

    // The SQL command is executed, and the response is stored.
    const response = await query(sql, [req.body.ID_Projeto]);

    // The response is sent as JSON.
    res.json(response);
});

// projetoRouter handles a POST request at '/atualizarProjeto'. This is used to update a specific record in the Projeto table.
projetoRouter.post('/atualizarProjeto', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to update a specific record in the Projeto table based on the ID and values in the request body.
    const sql = "UPDATE Projeto SET nome= ?'" + "', ativo= ?'" + "' WHERE ID_Projeto= ?";

    // The SQL command is executed, and the response is stored.
    const response = await query(sql, [req.body.nome, req.body.ativo, req.body.ID_Projeto]);

    // The response is sent as JSON.
    res.json(response);
});

// projetoRouter handles a POST request at '/removeProjeto'. This is used to delete a specific record from the Projeto table.
projetoRouter.post('/removeProjeto', async (req, res) => {
    // The HTTP status code is set to 200 and cross-origin requests are allowed.
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // An SQL command is defined to delete a specific record from the Projeto table based on the ID in the request body.
    const sql = "DELETE FROM Projeto WHERE ID_Projeto= ?'";

    // The SQL command is executed, and the response is stored.
    const response = await query(sql, [req.body.ID_Projeto]);

    // The response is sent as JSON.
    res.json(response);
});

// projetoRouter is exported for use in other parts of the application.
export default projetoRouter;
