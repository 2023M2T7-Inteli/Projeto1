import { Router } from "express";

const itemRouter = Router();

// Read all records from the Item table
itemRouter.get('/', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// Query to select all records from the Item table
	var sql = 'SELECT * FROM Item';
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

// Create a new record in the Item table
itemRouter.post('/insereItem', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Open the database connection
	var db = new sqlite3.Database(DBPATH);
	// SQL query to insert a new record into the Item table
	sql = "INSERT INTO Item (tipo_item, valor, status) VALUES ('" + req.body.tipo_item + "', '" + req.body.valor + "', '" + req.body.status + "')";
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
itemRouter.get('/atualizarItem', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to select a specific record from the Item table
	sql = "SELECT * FROM Item WHERE ID_Item=" + req.query.ID_Item;
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

// Update a record in the Item table
itemRouter.post('/atualizarItem', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to update a record in the Item table
	sql = "UPDATE Item SET tipo_item='" + req.body.tipo_item + "', valor= '" + req.body.valor + "', status='" + req.body.status + "'  WHERE ID_Item=" + req.body.ID_Item;
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

// Delete a record from the Item table
itemRouter.get('/removeItem', (req, res) => {
	// Set response headers
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// SQL query to delete a record from the Item table
	sql = "DELETE FROM Item WHERE ID_Item='" + req.query.ID_Item + "'";
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

export default itemRouter;
