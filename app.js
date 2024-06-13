const path = require('path');

const express = require('express');
const port = 8080;

const app = express(); 

const feedRoutes = require('./routes/feed');

app.use(express.json()); // this is for application json
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})



app.use('/feed', feedRoutes);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
