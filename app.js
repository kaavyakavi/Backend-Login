const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const port = 5000;

const routes = require('./routes/default');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose
    // .connect(
    //     "mongodb+srv://kavyasusain:jwpxx271e4slWv2h@cluster0.xcrfbpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    //     { useNewUrlParser: true, useUnifiedTopology: true }
    // )
    .connect(
        "mongodb+srv://kaavyakavi1111_db_user:Bc4NLJiM5H53q5Qe@cluster0.zdgvmwo.mongodb.net/?appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('cloud connected'))
    .catch((err) => console.log(err, 'cloud not connected'));


app.use('/api/admin', routes);

app.listen(port, () => {
    console.log(`successfully running at http://localhost:${port}`);
})