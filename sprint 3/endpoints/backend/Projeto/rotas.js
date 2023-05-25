import { Router } from "express";

const projetoRouter = Router();

// Read all records from the Projeto table
projetoRouter.get('/', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Query to select all records from the Projeto table
	var sql = 'SELECT * FROM Projeto';
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

// Create a new record in the Projeto table
projetoRouter.post('/insereProjeto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// SQL query to insert a new record into the Projeto table
	sql = "INSERT INTO Projeto (nome, ativo) VALUES ('" + req.body.nome + "', '" + req.body.ativo + "')";
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
projetoRouter.get('/atualizarProjeto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Projeto table
	sql = "SELECT * FROM Projeto WHERE ID_Projeto=" + req.query.ID_Projeto;
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

// Update a record in the Projeto table
projetoRouter.post('/atualizarProjeto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Projeto table
	sql = "UPDATE Projeto SET nome='" + req.body.nome + "', ativo= '" + req.body.ativo + "' WHERE ID_Projeto=" + req.body.ID_Projeto;
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

// Delete a record from the Projeto table
projetoRouter.get('/removeProjeto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Projeto table
	sql = "DELETE FROM Projeto WHERE ID_Projeto='" + req.query.ID_Projeto + "'";
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

export default projetoRouter;
