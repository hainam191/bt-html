var mongoose = require("../config/db")
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    message: String,
},{
    collection: "btvn"
})

var UserModel = mongoose.model("btvn",UserSchema);
module.exports = UserModel;