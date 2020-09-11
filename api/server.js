const express = require('express') 

const recipesRouter = require('../recipes/recipes-router')

const server = express()

server.use(express.json())
server.use(logger)
server.use('/api/recipes', recipesRouter)


server.get('/', (req, res) => {
    res.status(200).json({ message: 'server upppp' })
})

function logger(req, res, next) {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

module.exports = server
