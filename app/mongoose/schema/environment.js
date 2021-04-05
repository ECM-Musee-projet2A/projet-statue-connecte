/**
 *environment data structure
 **/
import mongoose from 'mongoose'

module.exports = new mongoose.schema({
    position:String,//position de statue
    PH:Number,
    temperature:Number,
    date:Date(),

})
