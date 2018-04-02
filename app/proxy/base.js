const httpProxy = require("express-http-proxy");

class Base {
    constructor(serviceProxy) {
        this.serviceProxy = serviceProxy;
    }

    redirect(req, res, next) {
        this.serviceProxy(req, res, next);
    }

    addRoutes() {

    }

    static proxy (app, options) {
        const serviceProxy = httpProxy(options.redirectUrl),
            instance = new this(serviceProxy);
        instance.addRoutes(app); 
    }
}

module.exports = Base;