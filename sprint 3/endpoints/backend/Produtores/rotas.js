import { Router } from "express";

const produtorRouter = Router();

produtorRouter.get('/', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Produtor';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
produtorRouter.post('/insereProdutor',  (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Produtor (nome, login, senha) VALUES ('" + req.body.nome + "', '" + req.body.login + "', '" + req.body.senha + "')";
	console.log("jaslkdjlkas" + req.boddy)
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
produtorRouter.get('/atualizarProdutor', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM Produtor WHERE ID_Produtor="+ req.query.ID_Produtor;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
produtorRouter.post('/atualizarProdutor', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Produtor SET nome='" + req.body.nome + "', login= '" + req.body.login + "' , senha='" + req.body.senha + "' WHERE ID_Produtor=" + req.body.ID_Produtor;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
produtorRouter.get('/removeProdutor', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Produtor WHERE ID_Produtor='" + req.query.ID_Produtor + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

export default produtorRouter;