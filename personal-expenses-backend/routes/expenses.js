module.exports = function(server) {
    
    const jsonServer = require("json-server");
    const router = jsonServer.router("db.json");

    //get all expenses
    server.get("/api/expenses/all", (request, response) => {
        const expenses = router.db.get("expenses").value();
        response.json(expenses);
    })
}