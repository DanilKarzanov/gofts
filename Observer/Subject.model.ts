import { IObserver } from "./Observer.model"

export interface ISubject {
    observers: Set<IObserver>
    temperature: number
    humidity: number
    pressure: number

    registerObserver: (observer: IObserver) => void
    removeObserver: (observer: IObserver) => void
    notifyObservers: () => void
    setData: Function

}