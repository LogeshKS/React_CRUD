const mongoose = require('mongoose');
const schema = mongoose.Schema;

let User = new schema({
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


