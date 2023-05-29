import { Router } from "express";

const alocacaoRouter = Router();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Certifique-se de definir o caminho correto para o banco de dados
    var sql = 'SELECT * FROM Alocacao INNER JOIN Usuario ON Alocacao.ID_Usuario = Usuario.id INNER JOIN Projeto ON Alocacao.ID_Projeto = Projetos.id;';
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
      console.log(rows);
    });
    db.close(); // Fecha o banco
  });

  export default alocacaoRouter;