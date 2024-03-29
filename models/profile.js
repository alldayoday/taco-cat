import mongoose from 'mongoose'
import { Ingredient } from './ingredient.js'


const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
}, {
  timestamps: true
})


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  cats: [catSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
