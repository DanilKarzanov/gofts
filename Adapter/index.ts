import { RoundBrick, SquareBrick, SquareBrickAdapter } from "./SquareBrickAdapter"

class RoundHole {
    private radius: number = 2

    constructor() {}

    public getRadius(): number {
        return this.radius
    }

    public fits(figure: RoundBrick): boolean {
        return this.radius >= figure.getRadius()
    }
}

const main = () => {
    const roundHole = new RoundHole()
    const roundBrick = new RoundBrick()
    const squareBrick = new SquareBrick()
    const squareBrickAdapter = new SquareBrickAdapter(squareBrick)

    console.log(roundHole.fits(roundBrick))
    console.log(roundHole.fits(squareBrickAdapter))
}

main()