
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

server.register(require('vision'), function(err) {
  if(err) {
    throw err;
  }

 // Demonstration of views in Hapi
  server.route({
    method: 'GET',
    path: '/utkarsh/{name}',
    handler: function(request, reply) {
      reply.view('index', {name: request.params.name});
    }
  });

 // Demonstration of static content in Hapi
  server.route({
    method: 'GET',
    path: '/utkarsh',
    handler: function(request, reply) {
      reply('<img src="/goolge.png" />');
    }
  });

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'templates'
  });

});

server.register(require('inert'), function(err) {
  if(err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/google.png',
    handler: function(request, reply) {
      reply.file('google.png');
    }
  });
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
