var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
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
    return LightOffCommand;
}());
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.command = command;
    };
    RemoteControl.prototype.execute = function () {
        this.command.execute();
    };
    return RemoteControl;
}());
var main = function () {
    console.log("Command pattern main function");
};
main();
