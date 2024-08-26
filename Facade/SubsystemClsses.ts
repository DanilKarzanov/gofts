export class Alarm {
    private alarm: boolean = true

    constructor() {}

    public setAlarmOff() {
        this.alarm = false
        console.log("alarm is off")
    }
}

export class Lights {
    private lowBeam: boolean = false
    private highBeam: boolean = false

    constructor() {}

    public turnOn(l: "low" | "high") {
        if (l === "low") {
            this.lowBeam = true
            console.log("low beam on")
            return
        }

        console.log("high beam on")
        this.highBeam = true
    }
}

export class Engine {
    private started: boolean = false

    constructor() {}

    public startEngine() {
        this.started = true
        console.log("engine started")
    }       
}