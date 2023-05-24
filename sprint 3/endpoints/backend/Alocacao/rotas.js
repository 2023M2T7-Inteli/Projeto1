import { Router } from "express";

const alocacaoRouter = Router();

app.get('/', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Certifique-se de definir o caminho correto para o banco de dados
	var sql = 'SELECT * FROM Alocacao a' + 
	                        'INNER JOIN Usuario u ' +
							       'ON a.ID_Usuario = u.ID_Usuario ' +
						    'INNER JOIN Projeto p ' +
							       'ON a.ID_Projeto = p.ID_Projeto';
	db.all(sql, [], (err, rows) => {
	  if (err) {
		throw err;
	  }
	  res.json(rows);
	  console.log(rows);
	});
	db.close(); // Fecha o banco
  });

  export default alocacaoRouter