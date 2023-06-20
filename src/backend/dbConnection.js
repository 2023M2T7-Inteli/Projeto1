import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DBPATH = path.join(__dirname, "..", "data", "banco.db"); 

export default DBPATH;