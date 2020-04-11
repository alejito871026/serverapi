const express = require('express');
const router = express.Router();

const Cliente = require('../models/Clientes');

const secret = '*DAhd871026#'

router.post('/saludo',(req, res)=>{
    Cliente.find(function(err, clientes){
        if (err){ throw err;}
        else{
            res.json(clientes)
        }
    })
})
router.post('/sal',(req, res)=>{
    res.status(200).json({saludo:'hola visitante'})
})
module.exports = router;