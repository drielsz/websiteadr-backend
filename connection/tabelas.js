class Tabelas  {
    init(conexao) {
        this.conexao = conexao;
        this.createTableCurtidas();;
    }

    createTableCurtidas() {
        const sql = ` 
            CREATE TABLE IF NOT EXISTS curtidas (
                id INT AUTO_INCREMENT PRIMARY KEY,
                post_id INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log(`Erro ao criar tabela users: ${error.message}`);
            } else {
                console.log("Tabela curtidas criada ou já existente");
            }
        });
    }
}

module.exports = new Tabelas();