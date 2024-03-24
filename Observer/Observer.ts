import { IObserver } from "./Observer.model";
import { ISubject } from "./Subject.model";

export class Observer implements IObserver {
    temperature: number
    humidity: number
    pressure: number

    subject: ISubject

    constructor(subject: ISubject) {
        this.subject = subject
        this.subject.registerObserver(this)
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.display()
    }

    display(): void {
        console.log("Temperature is - %d", this.temperature)
        console.log("Humidity is - %d", this.humidity)
        console.log("Pressure is - %d", this.pressure)
    }
}