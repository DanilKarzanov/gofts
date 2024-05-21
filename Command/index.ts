import { Command } from "./Command.model"
import { Invoker } from "./Invoker.model"

class Light {
    constructor() {}

    on() {
        console.log("Light is on")
    }

    off() {
        console.log("Light is off")
    }
}

class Music {
    constructor() {}

    on() {
        console.log("Music is on")
    }

    off() {
        console.log("Music is off")
    }
}

class LightOnCommand implements Command {
    light: Light

    constructor(light: Light) {
        this.light = light
    }
    
    execute() {
        this.light.on()
    }

    undo() {
        this.light.off()
    }
}

class LightOffCommand implements Command {
    light: Light

    constructor(light: Light) {
        this.light = light
    }
    
    execute() {
        this.light.off()
    }

    undo() {
        this.light.on()
    }
}

class MusicOnCommand implements Command {
    music: Music

    constructor(music: Music) {
        this.music = music
    }

    execute(): void {
        this.music.on()
    }

    undo(): void {
        this.music.off()
    }
}

class MusicOffCommand implements Command {
    music: Music

    constructor(music: Music) {
        this.music = music
    }

    execute(): void {
        this.music.off()
    }

    undo(): void {
        this.music.on()
    }
}

class RemoteControl implements Invoker {
    command: Command
    undoStack: Array<Command> = []

    setCommand(command: Command): void {
        this.command = command
    }

    execute(): void {
        this.command.execute()
        this.undoStack.push(this.command)
    }

    undo(): void {
        const lastCommand = this.undoStack.pop()
        if (!lastCommand) {
            console.log("Undo Stack is empty")
            return
        }

        lastCommand.undo()
    }
}

const main = () => {
    const remoteControl = new RemoteControl()
    const light = new Light()
    const lightOnCommand = new LightOnCommand(light)
    const lightOffCommand = new LightOffCommand(light)
    remoteControl.setCommand(lightOnCommand)
    remoteControl.execute()
    remoteControl.undo()
    // remoteControl.setCommand(lightOffCommand)
    // remoteControl.execute()
} 

main()