const express = require('express');

const RecipeRouter = require('./recipe/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;