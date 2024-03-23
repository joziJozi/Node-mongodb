const express = require('express')
const produto = require('../models/Produto')
const router = express.Router()

router.get('/', function(req, res){
   res.json({})
})
router.get('/produtos', async function(req, res){
     res.json(await produto.find())
   
})
router.post('/produtos', async function(req, res){
     res.json(await produto.create({nome: 'Pizza'}))
   
})
router.get('/produtos/:id', async function(req, res){
     res.json(await produto.findById(req.params.id))
   
})
router.delete('/produtos/:id', async function(req, res){
     res.json(await produto.findByIdAndDelete(req.params.id))
   
})
router.put('/produtos/:id', async function(req, res){
     res.json(await produto.findByIdAndUpdate(req.params.id, req.body))
   
})

module.exports = router