const Base = require("./base");

class Books extends Base {
    addRoutes(app) {
        app.route("/books")
            .get(this.redirect.bind(this))
            .post(this.redirect.bind(this));
        
        app.route("/books/:userId")
            .get(this.redirect.bind(this))
            .put(this.redirect.bind(this))
            .delete(this.redirect.bind(this));
    }
}

module.exports = Books;