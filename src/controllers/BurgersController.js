import BaseController from "../utils/BaseController.js";
import { burgerService } from "../services/BurgerService.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router.get('/test', this.testBurgers)
    this.router.get('', this.getBurgers)
    this.router.post('', this.createBurger)
    //...
  }


  testBurgers(request, response, next) {
    console.log('🍔')
    response.send('Here are some Burgers')
  }


  async getBurgers(request, response, next) {
    try {
      const burgers = await burgerService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
      console.error(error)
    }
  }

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgerService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }




}