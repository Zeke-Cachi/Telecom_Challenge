const express = require('express');
const app = express();
require('dotenv').config();
const mysqldb = require('./db/mysql');
const morgan = require('morgan');
const cors = require('cors');
const userRouter = require('./routes/users');


//APP USE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/', userRouter);



//CONNECT TO SQL DATABASE
mysqldb.connect( (error) => {
  error ? console.log(error) : console.log('Connected to SQL database')
})

//SERVER
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server up on port ${port}`)
})

module.exports = app