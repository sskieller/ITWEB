
'use strict';

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry. The page you are looking for is not found.</h1>"
};

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
};


app.on("request",
    (req, res) => {
        var body = [];
        // On data received
        req.on("data",
            (bodyData) => {
                body.push(bodyData);
            });
        // On data stream ended
        req.on("end",
            () => {
                body = Buffer.concat(body).toString();
                console.log(`Request Body Contents: ${body}`);
            });
        res.writeHead(httpStatus.OK,
            {
                "Content-Type": "text/html"
            });
        console.log(`Method: ${getJSONString(req.method)}`);
        console.log(`URL: ${getJSONString(req.url)}`);
        console.log(`Headers: ${getJSONString(req.headers)}`);

        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url])
        } else {
            res.end("<h1>Welcome!</h1>");
        }

        //let responseMessage = "<h1>This will show on screen</h1>";
        //res.end(responseMessage);
    });

app.listen(port);
console.log(`This server has started and is listening on port ${port}`);