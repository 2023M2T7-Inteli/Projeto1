import { Router } from "express";
import query from "../utils/query.js";

const itemRouter = Router();

// Read all records from the Item table
itemRouter.get('/', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Query to select all records from the Item table
	const sql = 'SELECT * FROM Item';
	// Execute the query and return the results as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Create a new record in the Item table
itemRouter.post('/insereItem', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to insert a new record into the Item table
	
	const sql = "INSERT INTO Item (tipo_item, valor, status) VALUES (?, ?, ?)";
	
	const response = await query(sql, [req.body.tipo_item, req.body.valor, req.body.status]);
	
    res.json(response)
	// End the response
	res.end();
});

// Retrieve a specific record for updating
itemRouter.get('/atualizarItem', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Item table
	const sql = "SELECT * FROM Item WHERE ID_Item= ?";

	const response = await query(sql, [req.query.ID_Item]);
	
    res.json(response)
});

// Update a record in the Item table
itemRouter.post('/atualizarItem', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Item table
	const sql = "UPDATE Item SET tipo_item= ?'" + "', valor= ?'" + "', status= ?'" + "'  WHERE ID_Item= ?";
	// Execute the query to update the record
	const response = await query(sql, [req.body.tipo_item, req.body.valor, req.body.status, req.body.ID_Item]);
	
    res.json(response)
});

// Delete a record from the Item table
itemRouter.get('/removeItem', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Item table
	const sql = "DELETE FROM Item WHERE ID_Item= ?'";
	// Execute the query to delete the record
	const response = await query(sql, [req.query.ID_Item]);
	
    res.json(response)
});

export default itemRouter;
