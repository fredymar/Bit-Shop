import mongoose, { Schema, mongo } from "mongoose";

const note = new Schema({
    note: {type: String, required: true},
    estado: {type: String, required: true}
},
{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("note", note)