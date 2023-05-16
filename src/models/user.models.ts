import mongoose, { Schema, version } from "mongoose"

//schema de la collection
const user = new Schema({
    email : {type: String, required: true},
    username: String,
    password: {type: String, required: true},
    role: {type: String, required: true},
    active: {type: Boolean, default: false},
    dateBirth: {type: String, required: true},
    address: {type: String, required: true},
    paymentMethods: {type: Array, default: []},
    phoneNumber : {type: String, required: true}
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("user", user)