const express = require('express');

const db = require('./utils/databases')
const quoteRouter = require('./quotes/quote.router') 

const port = 9000;

const app = express();

db.authenticate()
    .then(() => {
        console.log('Databases Authenticated"')
    })
    .catch((err) => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => console.log(err))

app.use(express.json());

app.get('/', (req, res) => {
    res.json(200).json({
        message: 'OK'
    });
});

app.use('/api/v1', quoteRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

