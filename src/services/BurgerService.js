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










}

export const burgerService = new BurgerService()