const Comentario = require('../models/comentarioModel');

async function createComentario(req, res) {
    const { content } = req.body;
    const { postId } = req.params;

    try {
        const comentario = await Comentario.create({ content, PostId: postId });
        res.status(201).json(comentario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar comentário', message: error.message });
    }
}

async function deleteComentario(req, res) {
    const { id } = req.params;

    try {
        await Comentario.destroy({ where: { id } });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar comentário', message: error.message });
    }
}

async function getAllComentarios(req, res) {
    try {
        const comentarios = await Comentario.findAll();
        res.json(comentarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comentários', message: error.message });
    }
}

module.exports = { createComentario, deleteComentario, getAllComentarios };
