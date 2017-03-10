
const Hapi = require('hapi');
const server = new Hapi.Server();
const config = require('./config');
const db = require('./database');
const routes = require('./config/routes');

// server connection
server.connection({
  host: config.server.host,
  port: config.server.port
});

// definig routes
server.route(routes);

// starting server
server.start((err) => {
  if(err) {
    server.log('Error Trace: ' + err);
    throw err;
  }

  console.log('Server started at : ' + server.info.uri);
});
