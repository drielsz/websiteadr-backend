require('dotenv').config({ path: './.env' });
const mysql = require('mysql2');

let conexao;

function handleConnection () {
    conexao = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    conexao.getConnection((err, connection) => {
        if(err) {
            console.error(`Erro ao conectar ao mySQL`, err)
            setTimeout(handleConnection, 2000)
        }else {
            console.log(`Conectado ao mysql`);
            connection.release()
        }
    })
}

handleConnection();

module.exports = conexao;