module.exports = mongoose => mongoose.model(
        'user',
        mongoose.Schema(
            {username: String,
             password: String,
             name: String,
             telephone: String             
            }, { timestamps: true}
        )
    )



/*const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    username : { type: String, requred : true},
    password : { type: String, requred : true},
    name : { type: String, requred : true},
    telephone :{ type: String, requred : true}
})

let User = mongoose.model('User', UserSchema)
module.exports = User*/