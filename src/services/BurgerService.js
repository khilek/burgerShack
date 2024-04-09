import { dbContext } from "../db/DbContext.js"



class BurgerService {



  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }



  async devourBurger(burgerId) {
    const burgerToDevour = await dbContext.Burgers.findById(burgerId)

    if (!burgerToDevour) throw new Error(`Sorry, burger was devoured already ${burgerId}`)

    await dbContext.Burgers.deleteOne({ _id: burgerId })
  }






}

export const burgerService = new BurgerService()