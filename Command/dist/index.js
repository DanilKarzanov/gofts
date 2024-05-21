"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.on = function () {
        console.log("Light is on");
    };
    Light.prototype.off = function () {
        console.log("Light is off");
    };
    return Light;
}());
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        this.light.off();
    };
    return LightOnCommand;
}());
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        this.light.on();
    };
    return LightOffCommand;
}());
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.undoStack = [];
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.command = command;
    };
    RemoteControl.prototype.execute = function () {
        this.command.execute();
        this.undoStack.push(this.command);
    };
    RemoteControl.prototype.undo = function () {
        var lastCommand = this.undoStack.pop();
        if (!lastCommand) {
            console.log("Undo Stack is empty");
            return;
        }
        lastCommand.undo();
    };
    return RemoteControl;
}());
var main = function () {
    var remoteControl = new RemoteControl();
    var light = new Light();
    var lightOnCommand = new LightOnCommand(light);
    var lightOffCommand = new LightOffCommand(light);
    remoteControl.setCommand(lightOnCommand);
    remoteControl.execute();
    remoteControl.undo();
    // remoteControl.setCommand(lightOffCommand)
    // remoteControl.execute()
};
main();
