
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome:{
        type: String,
        trim: true,
        minLength: 3,
        match: /^[a-zA-ZÀ-ú\s'-]+$/,
        required: true,
    },

    cpf:{
        type: Number,
        default: 0,
        required: true,
        min: 0,
        match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    },

    telefone: {
        type: Number,
        default: 0,
        required: true,
        match: /^\(\d{2}\) \d{4}-\d{4}$/,
    },

    email: {
        type: String,
        default: 0,
        required: true,
        minLength: 2,
    },
   
})

const Cliente = mongoose.model('Cliente', Schema)

module.exports = Cliente