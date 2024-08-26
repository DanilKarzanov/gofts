import { Alarm, Engine, Lights } from "./SubsystemClsses";

class CarFacade {

    constructor(
        private readonly alarm: Alarm,
        private readonly lights: Lights,
        private readonly engine: Engine,
        // many more subsystem classes ...
    ) {}

    public startCar() {
        this.alarm.setAlarmOff()
        this.lights.turnOn("low")
        this.engine.startEngine()
    }
}

const main = () => {
    const carFacade = new CarFacade(
        new Alarm(),
        new Lights(),
        new Engine()
    )

    carFacade.startCar()
}

main()