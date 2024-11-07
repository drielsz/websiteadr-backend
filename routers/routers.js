const { Router } = require('express');
const router = Router();
const atendimentoModel = require("../models/atendimentoModel")

router.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a nossa API'})
})

router.post('/curtir', (req, res) => {
    let { post_id } = req.body;

    if(!post_id) {
        return res.status(400).send({message: "sem post id"});
    }
    atendimentoModel.criarCurtida(post_id)
    .then(() => {
        return res.status(200).send({ message: 'Curtida criada com sucesso' })
    }).catch(err => {
        console.error('Erro ao salvar a curtida', err)
        return res.status(500).send({ message: 'Erro ao salvar a curtida' })
    });
});

router.get('/curtidas', (req, res) => {
    atendimentoModel.contarCurtidasPorPost()
        .then(result => {
            res.status(200).json(result); // Retorna um array com os `post_id` e suas respectivas contagens de curtidas
        })
        .catch(error => {
            console.error('Erro ao obter contagem de curtidas:', error);
            res.status(500).send({ message: 'Erro ao obter contagem de curtidas' });
        });
});

module.exports = router;