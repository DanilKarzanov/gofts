abstract class Beverage {
    description: string

    abstract getDescription(): string
    abstract cost(): number
}

abstract class CondimentDecorator extends Beverage {
    abstract beverage: Beverage

    abstract getDescription(): string
}

class Espresso extends Beverage {
    description: string

    constructor() {
        super()
        this.description = "Espresso"
    }

    getDescription() {
        return this.description
    }

    cost() {
        return 1.99
    }

}

class HouseBlend extends Beverage {
    description: string

    constructor() {
        super()
        this.description = "House Blend"
    }

    getDescription(): string {
        return this.description
    }
    
    cost(): number {
        return 0.89
    }
    
}

class Soy extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + "Soy"
    }

    cost(): number {
        return this.beverage.cost() + 0.15
    }

}

class Milk extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + "Milk"
    }

    cost(): number {
        return this.beverage.cost() + 0.10
    }

}

class Whip extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + "Whip"
    }

    cost(): number {
        return this.beverage.cost() + 0.10
    }

}

const main = () => {
    const espresso: Beverage = new Espresso()
    console.log(espresso.getDescription() + " " + espresso.cost())

    const espressoSoy = new Soy(espresso)
    console.log(espressoSoy.getDescription() + " " + espressoSoy.cost())

    const espressoSoyWhip = new Whip(espressoSoy)
    console.log(espressoSoyWhip.getDescription() + " " + espressoSoyWhip.cost())
}

main()