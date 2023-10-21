const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: './.env'})

const db = require('./models')

const publicDirectory = path.join(__dirname, )

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>")
});

app.set('view-engine', 'hbs')

db.sequelize.sync({force: true}).then(() =>{
    app.listen(3001, () => {
        console.log("server running 11")
    });
});




