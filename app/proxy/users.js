const Base = require("./base");

class Users extends Base {
    addRoutes(app) {
        app.route("/users")
            .get(this.redirect.bind(this))
            .post(this.redirect.bind(this));
        
        app.route("/users/:userId")
            .get(this.redirect.bind(this))
            .put(this.redirect.bind(this))
            .delete(this.redirect.bind(this));
    }
}

module.exports = Users;