import { Pizza } from "./Pizza.model";

interface IPizza {}

class CheesePizza implements IPizza {}

class PepperoniPizza implements IPizza {}

class SimplePizzaFactory {
    createPizza(type: string): IPizza | null {
        let pizza: IPizza | null = null

        switch (type) {
            case "cheese":
                pizza = new CheesePizza()
                break;
            case "pepperoni":
                pizza = new PepperoniPizza()
                break;
            default:
                break;
        }
        return pizza
    }
}



class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY style cheese pizza"
        this.dought = "Thin dough"
        this.sauce = "Marinara souce"

        this.toppings.add("Reggiano cheese")
    }
}

class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super()
        this.name = "Chicago style cheese pizza"
        this.dought = "Thick dough"
        this.sauce = "Plum tomato souce"

        this.toppings.add("Mozzarella cheese")
    }
}

const main = (): void => {

}

main()