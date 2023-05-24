
import express from "express"
import bodyParser from "body-parser"
import routes from './rotas.js';
import sql3 from "sqlite3";
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = sql3.verbose();
const DBPATH = '../data/bancov8.db';

const hostname = '127.0.0.1';
const port = 3001;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../front/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Aplica as Rotas
app.use(routes);

app.listen(port, hostname, () => {
	console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });