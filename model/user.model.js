const mongoose = require('mongoose'); //mongoess imported for making schema

const db =require('../config/db'); //connection to db is imp 


const { Schema }=mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
});

const UserModel = db.model('user',userSchema);

module.exports =UserModel;







// The first argument to mongoose.model is the singular name of the collection that the model is for ('User' in this case). Mongoose will automatically create a collection in the database with a pluralized version of this name ('users' in this case).