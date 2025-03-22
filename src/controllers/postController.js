const Post = require('../models/postModel');

async function createPost(req, res) {
  const { title, content } = req.body;

  try {
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar post', message: error.message });
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar posts',message: error.message });
  }
}

async function deletePost(req, res) {
  const { id } = req.params;

  try {
    await Post.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar post', message: error.message });
  }
}

module.exports = { createPost, getPosts, deletePost };