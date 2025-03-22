const express = require('express');
const postController = require('../controllers/postController');
const comentarioController = require('../controllers/comentarioController');

const router = express.Router();

router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
router.delete('/posts/:id', postController.deletePost);

router.post('/posts/:postId/comentarios', comentarioController.createComentario);
router.get('/comentarios', comentarioController.getAllComentarios);
router.delete('/comentarios/:id', comentarioController.deleteComentario);

module.exports = router;