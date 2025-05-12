const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required : true,
        minlength : 4,
        maxlength : 20,
    },
    email :{
        type: String,
        required : true,
        unique : true,
    },
    password : {
        type: String ,
        required : true,
        minlength: 8 ,
        maxlength: 16,

    },
    DOB : {
        type: Date,
        required : true,

    },
},{
    timestamps : true
}) ;

module.exports = mongoose.model('User',userSchema);