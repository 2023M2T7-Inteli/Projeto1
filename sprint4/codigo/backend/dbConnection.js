import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DBPATH = path.join(__dirname, "..", "data", "banco.db"); //use o nome que você achar melhor para o banco de dados

export default DBPATH;