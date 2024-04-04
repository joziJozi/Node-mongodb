const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    preco:{
       type: Number,
       default: 0,
       min: [0, 'Mais facil'],
       match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
 
    },
    tamanho:{
       type: String
    },
    tipo: {
        type: String,
        enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
    },
    ingredientes: [String]
        
   
})

const produto = mongoose.model('Produto', Schema)

module.exports = produto