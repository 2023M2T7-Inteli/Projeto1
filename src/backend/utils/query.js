import sqlite3 from "sqlite3";
import DBPATH from "../dbConnection.js";

async function query(sql) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(DBPATH); // Abre o banco

    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows);
    });

    db.close(); // Fecha o banco
  });
}

export default query;