const cors = require('cors'); 
const express = require('express');
const morgan = require('morgan')
const path = require('path');

const app = express();


require('./database') 

//midelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const history = require('connect-history-api-fallback')
app.use(history())

app.post('/api/saludo',(req, res)=>{
    res.send(req.body.saludo)
})

const host = process.env.HOST || '0.0.0.0';
const port  = process.env.PORT || 8800

//app.set('port', process.env.PORT || 9000);


app.listen(port,host,() => {
    console.log('server on port',port);
});
