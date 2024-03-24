"use strict";
exports.__esModule = true;
var Observer_1 = require("./Observer");
var Subject_1 = require("./Subject");
var main = function () {
    var subject = new Subject_1.Subject();
    var observer = new Observer_1.Observer(subject);
    subject.setData(80, 65, 30);
    subject.setData(100, 40, 7);
};
main();
