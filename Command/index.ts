import { Command } from "./Command.model"

interface Invoker {
    command: Command
    setCommand: (command: Command) => void
    execute: () => void
}

class LightOnCommand implements Command {
    light: any

    constructor(light: any) {
        this.light = light
    }
    
    execute() {
        this.light.on()
    }
}

class LightOffCommand implements Command {
    light: any

    constructor(light: any) {
        this.light = light
    }
    
    execute() {
        this.light.off()
    }
}

class RemoteControl implements Invoker {
    command: Command

    setCommand(command: Command): void {
        this.command = command
    }

    execute(): void {
        this.command.execute()
    }
}

const main = () => {
    console.log("Command pattern main function")

} 

main()