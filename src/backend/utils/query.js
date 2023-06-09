import sqlite3 from "sqlite3";
import DBPATH from "../dbConnection.js";

async function query(sql, ...args) {
  return new Promise((resolve, reject) => {
    console.log(args[0])
    const db = new sqlite3.Database(DBPATH); // Abre o banco

    db.all(sql, args[0], (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows);
    });

    db.close(); // Fecha o banco
  });
}

export default query;