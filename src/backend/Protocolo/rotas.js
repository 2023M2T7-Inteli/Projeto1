// Importing necessary modules: Router function from express module and the query function from the query module.
import { Router } from "express";
// Import a custom utility function for running SQL queries.
import query from "../utils/query.js";

// A Router instance is created and assigned to the variable protocoloRouter.
const protocoloRouter = Router();

// Read all records from the Protocolo table
protocoloRouter.get('/', async (req, res) => {
	 // The HTTP status code is set to 200 and cross-origin requests are allowed.
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Query to select all records from the Protocolo table
	const sql = 'SELECT * FROM Protocolo';
	// Execute the query and return the results as JSON
	const response = await query(sql, []);
	
    res.json(response)
});

// Create a new record in the Protocolo table
protocoloRouter.post('/insereProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to insert a new record into the Protocolo table
	const sql = "INSERT INTO Protocolo (nome, status) VALUES (?, ?)";
	// Execute the query to insert the new record
	const response = await query(sql, [req.body.nome, req.body.status]);
	// Redirect to the new form page
    res.redirect("/html/newForm.html")
});

// Retrieve a specific record for updating
protocoloRouter.post('/atualizarProtocoloGet', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Protocolo table
	const sql = "SELECT * FROM Protocolo WHERE ID_Protocolo= ?";
	// Execute the query and return the result as JSON
	const response = await query(sql, [req.body.ID_Protocolo]);
	
    res.json(response)
});

// Update a record in the Protocolo table
protocoloRouter.post('/atualizarProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Protocolo table
	const sql = "UPDATE Protocolo SET nome= ?'" + "', status= ?'" + "' WHERE ID_Protocolo= ?";
	// Execute the query to update the record
	const response = await query(sql, [req.body.nome, req.body.status, req.body.ID_Protocolo]);
	
    res.json(response)
});

// Delete a record from the Protocolo table
protocoloRouter.post('/removeProtocolo', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Protocolo table
	const sql = "DELETE FROM Protocolo WHERE ID_Protocolo= ?'";
	// Execute the query to delete the record
	const response = await query(sql, [req.body.ID_Protocolo]);
	
	// The response is sent as JSON.
    res.json(response)
});

// protocoloRouter is exported for use in other parts of the application.
export default protocoloRouter;
