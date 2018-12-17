var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors');
var path = require("path");
var loginCtrl = require('./loginCtrl');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({
	type:'application/json' }));
app.use(cors());

app.use('/login', loginCtrl);
app.use(express.static(path.join(__dirname, '..','/front-end')));
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});