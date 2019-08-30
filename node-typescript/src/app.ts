import http from 'http';
import httpStatus from 'http-status-codes';

const port = 3000;

const routeResponseMap = {
    "/info" : "<h1>Info Page</h1>",
    "/error" : "<h1>404: This page cannot be found.</h1>",
};


const app = http.createServer((request, response) => {
    console.log('Received an incoming request!');
    response.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html'
    });
    
    if (request.url != null && request.url in routeResponseMap){
        response.end(routeResponseMap )
    } else {
        response.end("<h1>Welcome</h1>");
    }

});



app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
