const express=require('express')
const bodyParser = require("body-parser");
const app=express()
app.set('views', __dirname + '\\product-comparator\\src\\pages\\');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('product-comparator'));
app.use('/',require('./routes/result'))
const PORT=5000
app.listen(PORT,console.log("Success"))