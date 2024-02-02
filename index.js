const app =require('./app');  //importing  app.js 
const db =require('./config/db');
const UserModel =require('./model/user.model');

const port=3000; //port

app.get('/',(req , res)=>{
    res.send(" Hellow World Pranjal , How are you?")
});



// 1) connecting to ports 
app.listen(port , ()=>{
    console.log(`Server is running at ${port}`);
})

// 2) node index.js -TO STRAT SERVER 
// 3) ctrl+c to close the server
