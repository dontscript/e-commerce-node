const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const ejs = require('ejs');
const config = require('./config/default');
const routes = require('./routes');

mongoose.connect(config.database_url, {
    useMongoClient: true
}).then(
    () => console.log('Connected'),
    err => console.log(err)
);

app.set('secretKey', config.secret_key);

app.set('views', path.join(__dirname, '../client'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/app/templates', express.static(path.join(__dirname, '../client/app/templates')));
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
app.use('/libs', express.static(path.join(__dirname, '../client/libs')));
app.use('/bundles', express.static(path.join(__dirname, '../client/bundles')));

app.use('/api', routes);

app.get('/', (req, res) => {
    return res.render('index');
});

app.listen(config.port, config.hostname, () => {
    console.log(`Listening on ${config.hostname}:${config.port}`);
});