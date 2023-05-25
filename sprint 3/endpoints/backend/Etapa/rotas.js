import { Router } from "express";

const etapaRouter = Router();

// Read all records from the Etapa table
etapaRouter.get('/', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Query to select all records from the Etapa table
	var sql = 'SELECT * FROM Etapa';
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

// Create a new record in the Etapa table
etapaRouter.post('/insereEtapa', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// SQL query to insert a new record into the Etapa table
	sql = "INSERT INTO Etapa (nome, status) VALUES ('" + req.body.nome + "', '" + req.body.status + "')";
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
etapaRouter.get('/atualizarEtapa', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Etapa table
	sql = "SELECT * FROM Etapa WHERE ID_Etapa=" + req.query.ID_Etapa;
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

// Update a record in the Etapa table
etapaRouter.post('/atualizarEtapa', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Etapa table
	sql = "UPDATE Etapa SET nome='" + req.body.nome + "', status= '" + req.body.status + "' WHERE ID_Etapa=" + req.body.ID_Etapa;
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

// Delete a record from the Etapa table
etapaRouter.get('/removeEtapa', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Etapa table
	sql = "DELETE FROM Etapa WHERE ID_Etapa='" + req.query.ID_Etapa + "'";
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

export default etapaRouter;
