const express = require("express"),
    app = express(),
    config = require("./app/config"),
    proxy = require("./app/proxy");

proxy(app, config.proxy);

app.listen(config.port, () => {
    console.log(config.name, "server was started on port - " + config.port);
});