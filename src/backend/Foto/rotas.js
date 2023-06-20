import { Router } from "express";
import query from "../utils/query.js";
const fotoRouter = Router();

// Read all records from the Foto table
fotoRouter.get('/',  async(req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
		// Query to select all records from the Foto table
	const sql = 'SELECT * FROM Foto';
	// Execute the query and return the results as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Create a new record in the Foto table
fotoRouter.post('/insereFoto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to insert a new record into the Foto table
	const sql = "INSERT INTO Foto (tipo_de_foto, valor) VALUES (?, ?)";
	console.log(sql);
	// Execute the query to insert the new record
	const response = await query(sql, [req.body.tipo_de_foto, req.body.valor]);
	
    res.json(response)
	// End the response
	res.end();
});

// Retrieve a specific record for updating
fotoRouter.get('/atualizarFoto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Foto table
	const sql = "SELECT * FROM Foto WHERE ID_Foto= ?";

	const response = await query(sql, [req.query.ID_Foto]);
	
    res.json(response)
});

// Update a record in the Foto table
fotoRouter.post('/atualizarFoto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Foto table
	const sql = "UPDATE Foto SET tipo_de_foto= ?'" + "', valor= ?'" + "'  WHERE ID_Item= ?";

	const response = await query(sql, [req.body.tipo_de_foto, req.body.valor, req.body.ID_Item]);
	
    res.json(response)
});

// Delete a record from the Foto table
fotoRouter.get('/removeFoto', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Foto table
	const sql = "DELETE FROM Foto WHERE ID_Foto= ?'";

	const response = await query(sql, [req.query.ID_Foto]);
	
    res.json(response)
});

export default fotoRouter;
