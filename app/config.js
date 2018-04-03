module.exports = {
    name: "api-gateway",
    port: 3002,
    proxy: {
        users: {
            redirectUrl: "users:3000"
        },
        books: {
            redirectUrl: "books:3001"
        }
    }
};