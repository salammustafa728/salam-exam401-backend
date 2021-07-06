'use strict';

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors())

require('dotenv').config();

const axios = require('axios');

const PORT = process.env.PORT;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/drinks", { useNewUrlParser: true });

const getdrinksData = require('./model/drinks')

const { createDrink,getdrinksfav , deleteDrink , updateDrink} = require('./controller/drinks.crud.controller')

app.get('/',(req,res)=>{
    res.send('workinnnnnnnnnnnnng');
})

app.get('/allData',getdrinksData);

app.post('/createData',createDrink);

app.post('/getdrinksfav',getdrinksfav);


app.delete('/deleteData/strDrink',deleteDrink);

app.put('/udateData/strDrink',updateDrink);

app.listen(PORT,()=>{
    console.log(`server work on ${PORT}`);
})
