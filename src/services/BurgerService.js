

export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.cheese = true
    this.bacon = true
  }
}


export const fakeDB = {
  burgers: [
    new Burger({
      id: 1,
      name: 'double double',
      cheese: false,
      bacon: true,
    }),
    new Burger({
      id: 2,
      name: 'triple decker',
      cheese: true,
      bacon: true,
    })
  ]
}

class BurgerService {
  getBurgers() {
    const burgers = fakeDB.burgers
    return burgers
  }

  createBurger(payload) {
    const burger = payload
    burger.id = fakeDB.burgers[fakeDB.burgers.length - 1].id + 1
    fakeDB.burgers.push(burger)
    return burger
  }

  deleteBurger(burgerId) {
    const indexToRemove = fakeDB.burgers.findIndex(burger => burger.id == burgerId)
    // if(!fakeDB.burgers[indexToRemove]) throw new Error('could not throw away burger')
    fakeDB.burgers.splice(indexToRemove, 1)
    return 'throw away'
  }
}

export const burgerService = new BurgerService()