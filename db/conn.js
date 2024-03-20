const mongoose = require('mongoose')

async function main (){
    try {
        await mongoose.connect('mongodb+srv://jozianealmeida:joziane06@cluster0.x43vrgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Banco ok');
    }catch (error){
    console.log('Erro:' + error);
    }
}   

module.exports = main 