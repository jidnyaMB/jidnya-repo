const express = require('express');
const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extented: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.send('<h1>Page not found!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('In other');
    next();
});


app.listen(3001);