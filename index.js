const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


// const mongoose = require('mongoose');
const connection = "mongodb+srv://nouranabil:yarabhelpme@cluster0.hzdw7.mongodb.net/sd?";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
app.use(express.json());

app.use('/', routes);

app.use('*', (req, res, next) => {
    res.status(404).json({ err: 'NOT_FOUND' });
});

app.use((err, req, res, next) => {
    // Map the error and send it to user
    // instanceof
    // Check if this err is a mongoose err using instanceof
    console.error(err);
    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(422).json(err.errors);
    }
    if (err.code === 11000) {
        res.status(422).json({ statusCode: 'ValidationError', property: err.keyValue });
    }
    if (err.message === 'UN_AUTHENTICATED') {
        res.status(401).json({ statusCode: 'UN_AUTHENTICATED' });
    }
    res.status(503).end();
});

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
    console.log('App is up and ready on:', PORT);
});