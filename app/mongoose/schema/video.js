/**
 *video data structure
 **/
import mongoose from 'mongoose'
module.exports = new mongoose.schema({
    position:String,
    title:String,
    url:String,
    time:Date(),
    likes:Number,
    views:Number,
    Duration:Number


})
