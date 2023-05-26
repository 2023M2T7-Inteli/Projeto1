import { Router } from "express";

const protocoloRouter = Router();

// Read all records from the Protocolo table
protocoloRouter.get('/', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Query to select all records from the Protocolo table
	var sql = 'SELECT * FROM Protocolo';
	// Execute the query and return the results as JSON
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		console.log(rows);
	});
	// Close the database connection
	db.close();
});

// Create a new record in the Protocolo table
protocoloRouter.post('/insereProtocolo', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// SQL query to insert a new record into the Protocolo table
	sql = "INSERT INTO Protocolo (nome) VALUES ('" + req.body.nome + "')";
	console.log(sql);
	// Execute the query to insert the new record
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
	});
	// Close the database connection
	db.close();
	// End the response
	res.end();
});

// Retrieve a specific record for updating
protocoloRouter.get('/atualizarProtocolo', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Protocolo table
	sql = "SELECT * FROM Protocolo WHERE ID_Protocolo=" + req.query.ID_Protocolo;
	console.log(sql);
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Execute the query and return the result as JSON
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	// Close the database connection
	db.close();
});

// Update a record in the Protocolo table
protocoloRouter.post('/atualizarProtocolo', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Protocolo table
	sql = "UPDATE Protocolo SET nome='" + req.body.nome + "' WHERE ID_Protocolo=" + req.body.ID_Protocolo;
	console.log(sql);
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Execute the query to update the record
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	// Close the database connection
	db.close();
});

// Delete a record from the Protocolo table
protocoloRouter.get('/removeProtocolo', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Protocolo table
	sql = "DELETE FROM Protocolo WHERE ID_Protocolo='" + req.query.ID_Protocolo + "'";
	console.log(sql);
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Execute the query to delete the record
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	// Close the database connection
	db.close();
});

export default protocoloRouter;
