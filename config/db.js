const mongoose =require('mongoose');

const connection =mongoose.createConnection('mongodb://127.0.0.1:27017/ToDo').on('open' , ()=>{
    console.log(`mongoDB connected`);
}).on('error', ()=>{
    console.log(` error in conecting mongoDB `);
})

module.exports =connection;