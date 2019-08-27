
'use strict';

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();


app.on("request",
    (req, res) => {
        res.writeHead(httpStatus.OK,
            {
                "Content-Type": "text/html"
            });
        let responseMessage = "<h1>This will show on screen</h1>";
        res.end(responseMessage);
    });

app.listen(port);
console.log(`This server has started and is listening on port ${port}`);