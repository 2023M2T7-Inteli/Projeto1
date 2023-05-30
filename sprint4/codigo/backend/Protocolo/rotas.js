import { Router } from "express";
import query from "../utils/query.js";
const protocoloRouter = Router();

// Read all records from the Protocolo table
protocoloRouter.get('/', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Query to select all records from the Protocolo table
	const sql = 'SELECT * FROM Protocolo';
	// Execute the query and return the results as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Create a new record in the Protocolo table
protocoloRouter.post('/insereProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	// SQL query to insert a new record into the Protocolo table
	const sql = "INSERT INTO Protocolo (nome) VALUES ('" + req.body.nome + "')";
	// Execute the query to insert the new record
	const response = await query(sql);
	// End the response
	res.end();
});

// Retrieve a specific record for updating
protocoloRouter.get('/atualizarProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Protocolo table
	const sql = "SELECT * FROM Protocolo WHERE ID_Protocolo=" + req.query.ID_Protocolo;
	// Execute the query and return the result as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Update a record in the Protocolo table
protocoloRouter.post('/atualizarProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Protocolo table
	const sql = "UPDATE Protocolo SET nome='" + req.body.nome + "' WHERE ID_Protocolo=" + req.body.ID_Protocolo;
	// Execute the query to update the record
	const response = await query(sql);
	
    res.json(response)
});

// Delete a record from the Protocolo table
protocoloRouter.get('/removeProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Protocolo table
	const sql = "DELETE FROM Protocolo WHERE ID_Protocolo='" + req.query.ID_Protocolo + "'";
	// Execute the query to delete the record
	const response = await query(sql);
	
    res.json(response)
});

export default protocoloRouter;
