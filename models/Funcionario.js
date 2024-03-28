
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
   
})

const Funcionario = mongoose.model('Funcionario', Schema)

module.exports = Funcionario