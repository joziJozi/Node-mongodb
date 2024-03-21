const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const produto = mongoose.model('Produto', Schema)

module.exports = produto