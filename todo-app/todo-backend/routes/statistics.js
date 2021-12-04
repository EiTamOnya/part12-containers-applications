const express = require('express');
const redis = require('../redis')
const router = express.Router();

router.get('/', async (_, res) => {
  const todoCount = await redis.getAsync('added_todos')
  res.send({ added_todos: todoCount });
});

module.exports = router;