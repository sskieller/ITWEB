'use strict';

const app = require('connect')(),
    http = require('http'),
    swaggerTools = require('swagger-tools'),

    serverPort = 3000;

// SwaggerRouter configuration
const options = {
    controllers: './controllers',
    // Conditionally turn on stubs (mock mode)
    useStubs: process.env.NODE_ENV === 'development' ? true : false 
    // COMMANDLINE TO PROCESS IN POWERSHELL
    // $env:NODE_ENV="development" ; nodemon main.js
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const swaggerDoc = require('./api/swagger.json');

// Init swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {

    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());
    
    // Start the server
    http.createServer(app).listen(serverPort, () => {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    });
});