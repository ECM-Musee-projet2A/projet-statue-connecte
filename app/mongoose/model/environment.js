import mongoose from 'mongoose'
import environSchema from '../schemas/environment'

module.exports = mongoose.model('Video',environSchema);
