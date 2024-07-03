export class RoundBrick {
    private radius: number = 1.8

    constructor() {}

    public getRadius(): number {
        return this.radius
    }
}

export class SquareBrick {
    private width: number = 1

    constructor() {}

    public getWidth(): number {
        return this.width
    }
}

export class SquareBrickAdapter extends RoundBrick {
    constructor(private readonly adaptee: SquareBrick) {
        super()
    }

    private utilFunc(width: number): number {
        return width * Math.sqrt(2)/2
    }

    public getRadius(): number {
        return this.utilFunc(this.adaptee.getWidth())
    }
}