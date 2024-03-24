export abstract class Pizza {
    name: string
    dought: string
    sauce: string
    toppings: Set<string> = new Set()

    prepare(): void {
        console.log("Preparing -%o", this.name)
    }

    bake(): void {
        console.log("Baking for 20 minutes")
    }

    cut(): void {   
        console.log("Cutting the pizza into slices")
    }   

    getName(): string {
        return this.name
    }
 
}