import { Schema } from "mongoose"

export const BurgerSchema = new Schema({
  name: String,
  price: { type: Number, required: true }

})