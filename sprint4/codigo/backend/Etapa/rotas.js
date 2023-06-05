import { Router } from "express";
import query from "../utils/query.js";
const etapaRouter = Router();

// Read all records from the Etapa table
etapaRouter.get('/', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const sql = 'SELECT * FROM Etapa';
	// Execute the query and return the results as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Create a new record in the Etapa table
etapaRouter.post('/insereEtapa', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to insert a new record into the Etapa table	
	const sql = "INSERT INTO Etapa (nome, status, ID_Protocolo) VALUES ('" + req.body.nome + "', '" + req.body.status + "', '" + req.body.ID_Protocolo + "')";
	// Execute the query to insert the new record
	const response = await query(sql);
		// End the response
    res.redirect("/html/newForm.html?id=" + req.body.ID_Protocolo)
});

etapaRouter.get('/alocaItem', async(req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Etapa table
	const sql = 'SELECT * FROM Etapa INNER JOIN Item ON Etapa.ID_Item = Item.id';

	const response = await query(sql);
	
    res.json(response)
});

// Retrieve a specific record for updating
etapaRouter.get('/atualizarEtapa', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Etapa table
	const sql = "SELECT * FROM Etapa WHERE ID_Etapa=" + req.query.ID_Etapa;

	const response = await query(sql);
	
    res.json(response)
});

// Update a record in the Etapa table
etapaRouter.post('/atualizarEtapa', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Etapa table
	const sql = "UPDATE Etapa SET nome='" + req.body.nome + "', status= '" + req.body.status + "' WHERE ID_Etapa=" + req.body.ID_Etapa;
	// Execute the query to update the record
	const response = await query(sql);
	
    res.json(response)
});

// Delete a record from the Etapa table
etapaRouter.post('/removeEtapa', async(req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Etapa table
	const sql = "DELETE FROM Etapa WHERE ID_Etapa='" + req.query.ID_Etapa + "'";

	const response = await query(sql);
	
    res.json(response)
});

export default etapaRouter;
