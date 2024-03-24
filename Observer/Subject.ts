import { IObserver } from "./Observer.model";
import { ISubject } from "./Subject.model";

export class Subject implements ISubject {
    observers: Set<IObserver>

    temperature: number
    humidity: number
    pressure: number

    constructor() {
        this.observers = new Set()
    }

    registerObserver(observer: IObserver): void {
        this.observers.add(observer)
    }

    removeObserver(observer: IObserver): void {
        this.observers.delete(observer)
    }

    notifyObservers(): void {
        this.observers.forEach(obs => {
            obs.update(this.temperature, this.humidity, this.pressure)
        })
    }

    setData(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.notifyObservers()
    }

}