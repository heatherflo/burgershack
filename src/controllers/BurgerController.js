import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class BurgerController extends BaseController {
  constructor() {
    console.log('burgers');
    super('api/burgers');
    this.router
      // .get('', this.test)
      .get('', this.getBurgers)
      .get('/:cheese', this.getBurgersByCheese)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
  }

  deleteBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const message = burgerService.deleteBurger(burgerId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }


  createBurger(request, response, next) {
    try {
      const payload = request.body
      logger.log('request body', payload) //added .env file to the www folder with NODE_ENV=dev to get  my logger to work 
      // response.send('howdy') //for testing 
      const burger = burgerService.createBurger(payload)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }


  getBurgersByCheese(request, response, next) {
    try {
      if (request.params.cheese == "true") { //this will log the value of 'true' as the message or not- if I put anything in the /link that is something other than the word true- it will come back as the second message. 
        response.send('give me all the cheese')
      } else {
        response.send('cheese is the worst')
      }
    } catch (error) {
      next(error)
    }
  }

  getBurgers(request, response, next) {
    try {
      const burgers = burgerService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  test(request, response, next) {
    response.send('hey this worked!')
  }






}