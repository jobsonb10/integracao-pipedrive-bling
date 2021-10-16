const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes");
require("dotenv").config();

connectToDb();

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})