const jsonServer = require("json-server");
const jsonServerPort = 8095;

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.use(middlewares);

const expensesRoutes = require("./routes/expenses");
expensesRoutes(server);

server.listen(jsonServerPort, () => {
    console.log(`Json server is running in port: http://localhost:${jsonServerPort}`);
})