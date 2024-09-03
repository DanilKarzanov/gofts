export interface IIterator<T> {
    next: () => T
    hasNext: () => boolean
}

export interface IAggregate<T> {
    createIterator: () => IIterator<T>
}