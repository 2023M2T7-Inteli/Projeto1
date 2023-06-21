// Import the necessary modules: express module for creating the web server, 
import express from "express";
// Import the routes module for the server routes.
import routes from "./routes.js";

// Define hostname and port for the server.
const hostname = "localhost";
const port = 3001;

// Create an instance of express.
const app = express();

/* Configure the express application */
// the static files in the directory like HTML, CSS, JavaScript, images, etc.
app.use(express.static("../frontend/"));

/* Middleware for parsing JSON and urlencoded form data */
// The express.json middleware function parses incoming requests with JSON payloads.
app.use(express.json());
// The express.urlencoded middleware function parses incoming requests with url-encoded payloads.
app.use(express.urlencoded({ extended: true }));

/* Apply routes */
// Use the routes defined in the routes module.
app.use(routes);

/* Start the server */
// Start the server on the defined hostname and port.
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
