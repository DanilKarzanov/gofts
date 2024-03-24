export interface IObserver {
    update: (...args: number[]) => void
}