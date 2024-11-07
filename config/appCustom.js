const router = require("../routers");
const conexao = require("../connection/conexao");
const tabelas = require("../connection/tabelas");

module.exports = (app, express) => {
    router(app, express);
    tabelas.init(conexao);
}