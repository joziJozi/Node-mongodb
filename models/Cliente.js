
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
   
})

const Cliente = mongoose.model('Cliente', Schema)

module.exports = Cliente