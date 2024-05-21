import { Command } from "./Command.model"

export interface Invoker {
    command: Command
    setCommand: (command: Command) => void
    execute: () => void
    undo: () => void
}