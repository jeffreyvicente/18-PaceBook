// Imports the required modules
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Getts the current working directory path
const cwd = process.cwd();

// Setts the default port to 3001 or the value specified in the environment variable
const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
// Configures the middleware to parse incoming requests with JSON payloads
app.use(express.json());
// Configures the routes for the application
app.use(routes);

// Start the server and listen on the specified port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
