// Import necessary modules.
import { fileURLToPath } from "url";
import path from "path";

// Define __filename and __dirname for ES modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the database file.
const DBPATH = path.join(__dirname, "..", "data", "banco.db"); 

// Export the database path for use in other modules.
export default DBPATH;