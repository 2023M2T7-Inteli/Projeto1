import { Router } from "express";
import query from "../utils/query.js";
const projetoRouter = Router();

// Read all records from the Projeto table
projetoRouter.get('/', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Query to select all records from the Projeto table
	const sql = 'SELECT * FROM Projeto';
	// Execute the query and return the results as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Create a new record in the Projeto table
projetoRouter.post('/insereProjeto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to insert a new record into the Projeto table
	const sql = "INSERT INTO Projeto (nome, ativo) VALUES ('" + req.body.nome + "', '" + req.body.ativo + "')";
	// Execute the query to insert the new record
	const response = await query(sql);
	
    res.json(response)
	// End the response
	res.end();
});

// Retrieve a specific record for updating
projetoRouter.get('/atualizarProjeto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Projeto table
	const sql = "SELECT * FROM Projeto WHERE ID_Projeto=" + req.query.ID_Projeto;
	// Execute the query and return the result as JSON
	const response = await query(sql);
	
    res.json(response)
	// Close the database connection
	db.close();
});

// Update a record in the Projeto table
projetoRouter.post('/atualizarProjeto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Projeto table
	const sql = "UPDATE Projeto SET nome='" + req.body.nome + "', ativo= '" + req.body.ativo + "' WHERE ID_Projeto=" + req.body.ID_Projeto;
	// Execute the query to update the record
	const response = await query(sql);
	
    res.json(response)
});

// Delete a record from the Projeto table
projetoRouter.get('/removeProjeto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Projeto table
	const sql = "DELETE FROM Projeto WHERE ID_Projeto='" + req.query.ID_Projeto + "'";
	// Execute the query to delete the record
	const response = await query(sql);
	
    res.json(response)
});

export default projetoRouter;
