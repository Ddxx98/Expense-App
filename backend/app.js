const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const sequelize = require('./util/database')
const expense = require('./routes/expense')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/expense',expense)

sequelize.sync().then((result) => {
    app.listen(3000, () => {
        //console.log(result)
        console.log("Server running in 3000")
    });
}).catch(err => {
    console.log(err);
});