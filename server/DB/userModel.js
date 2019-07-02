const mongoose = require('mongoose');
const Schema = mongoose.schema;

let User = new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    mobNo:{
        type: Number
    },
},{
        collection : "user_details"    

});

module.exports = mongoose.model('User', User);