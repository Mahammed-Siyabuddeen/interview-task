import mongoose from "mongoose"

const schema=mongoose.Schema({
    name:String,
})
export const database=mongoose.model('database',schema)