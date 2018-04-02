const Users = require("./users"),
    Books = require("./books");

module.exports = (app, options) => {
    Users.proxy(app, options.users);
    Books.proxy(app, options.books);
};