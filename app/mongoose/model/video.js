import mongoose from 'mongoose'
import videoSchema from '../schemas/video'

module.exports = mongoose.model('Video',videoSchema);
