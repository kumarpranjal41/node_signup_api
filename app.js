// 1) USE TO MAKE ROUTES AND USE OF EXPRESS 

const express = require('express');
const body_parser =require('body-parser');
const userRouter =require('./routes/user.router');

// 2) to create an instance of the Express application that you can configure with middleware, routes, and other settings. 
const app=express(); //instance

app.use(body_parser.json());

app.use('/', userRouter);

module.exports=app;