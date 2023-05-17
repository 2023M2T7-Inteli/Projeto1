import { Router } from "express";

const pesquisadorRouter = Router();

// Retorna todos Logins da tabela pesquisador (é o R do CRUD - Read)
pesquisadorRouter.get('/', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Pesquisador';
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
pesquisadorRouter.post('/inserePesquisador', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Pesquisador (nome, login, senha) VALUES ('" + req.body.nome + "', '" + req.body.login + "', '" + req.body.senha + "')";
	console.log("jaslkdjlkas" + req.boddy)
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>PESQUISADOR INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
pesquisadorRouter.get('/atualizarPesquisar', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM Pesquisador WHERE ID_Pesquisador="+ req.query.ID_Pesquisador;
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
pesquisadorRouter.post('/atualizarPesquisador', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Pesquisador SET nome='" + req.body.nome + "', login= '" + req.body.login + "' , senha='" + req.body.senha + "' WHERE ID_Pesquisador=" + req.body.ID_Pesquisador;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>PESQUISADOR ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
pesquisadorRouter.get('/removePesquisador', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Pesquisador WHERE ID_Pesquisador='" + req.query.ID_Pesquisador + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>PESQUISADOR REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});
export default pesquisadorRouter;