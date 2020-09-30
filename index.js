const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

app.use(express.json());

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(once => {console.log('Connected successfully')
        app.listen(process.env.PORT, () => console.log(`Listening on port: ${process.env.PORT}`))
    }).catch(err => console.log(`Failed to connected with error : ${err.message}`))

const postRoute = require('./routes/posts');

app.use('/', postRoute);

