import { Router } from "express";

const fotoRouter = Router();

// Read all records from the Foto table
fotoRouter.get('/', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Query to select all records from the Foto table
	var sql = 'SELECT * FROM Foto';
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

// Create a new record in the Foto table
fotoRouter.post('/insereFoto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// SQL query to insert a new record into the Foto table
	sql = "INSERT INTO Foto (tipo_de_foto, valor) VALUES ('" + req.body.tipo_de_foto + "', '" + req.body.valor + "')";
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
fotoRouter.get('/atualizarFoto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Foto table
	sql = "SELECT * FROM Foto WHERE ID_Foto=" + req.query.ID_Foto;
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

// Update a record in the Foto table
fotoRouter.post('/atualizarFoto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Foto table
	sql = "UPDATE Foto SET tipo_de_foto='" + req.body.tipo_de_item + "', valor= '" + req.body.valor + "'  WHERE ID_Item=" + req.body.ID_Item;
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

// Delete a record from the Foto table
fotoRouter.get('/removeFoto', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Foto table
	sql = "DELETE FROM Foto WHERE ID_Foto='" + req.query.ID_Foto + "'";
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

export default fotoRouter;
