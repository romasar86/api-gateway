module.exports = {
    name: "api-gateway",
    port: 3002,
    proxy: {
        users: {
            redirectUrl: "127.0.0.1:3000"
        },
        books: {
            redirectUrl: "127.0.0.1:3001"
        }
    }
};