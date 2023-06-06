import { Router } from "express";
import query from "../utils/query.js";
const enviarRouter = Router();

// Read all records from the Etapa table
enviarRouter.get('/', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const sql = 'SELECT * FROM Enviar';
	// Execute the query and return the results as JSON
	const response = await query(sql);
	
    res.json(response)
});

// Create a new record in the Etapa table
enviarRouter.post('/insereEnviar', async (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to insert a new record into the Etapa table	
	const sql = "INSERT INTO Enviar (ID_Protocolo, ID_Usuario, ID_Envio) VALUES ('" + req.body.ID_Protocolo + "', '" + req.body.ID_Usuario + "', '" + req.body.ID_Envio + "')";
	// Execute the query to insert the new record
	const response = await query(sql);
		// End the response
    res.redirect(req.body.currentUrl)
});

export default enviarRouter;
