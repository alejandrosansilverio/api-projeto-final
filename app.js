const express = require('express')
var mongoose = require('mongoose');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/uaivivino');//conexão com o banco

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res)=> res.json({message: 'Funcionando!'}));
app.use('/', router);


app.listen(port);
console.log('API funcionando!');
