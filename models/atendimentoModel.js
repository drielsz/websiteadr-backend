const conexao = require("../connection/conexao")

class AtendimentoModel {
    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (err, resposta) => {
                if (err) {
                    return reject(err)
                }
                return resolve(resposta)
            })
        })
    }
    
    criarCurtida(post_id) {
        const sql = `INSERT INTO curtidas (post_id) VALUES (?)`
        return this.executaQuery(sql, [post_id])
    }

    contarCurtidasPorPost() {
        const sql = `SELECT post_id, COUNT(*) AS totalCurtidas FROM curtidas GROUP BY post_id`    
        return this.executaQuery(sql)
    }
}

module.exports = new AtendimentoModel()