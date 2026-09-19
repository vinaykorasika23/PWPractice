"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printNumberOfStatuses = printNumberOfStatuses;
function printNumberOfStatuses(array) {
    var passedCount = 0;
    var failedCount = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var status_1 = array_1[_i];
        if (status_1 === "passed") {
            passedCount++;
        }
        else {
            failedCount++;
        }
    }
    console.log("Number of passed statuses :".concat(passedCount));
    console.log("Number of Failed statuses :".concat(failedCount));
}
var statuses = ["passed", "failed", "passed", "failed", "failed"];
printNumberOfStatuses(statuses);
function printNumberOfStrings(array) {
    var counts = {};
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var item = array_2[_i];
        counts[item] = (counts[item] || 0) + 1;
    }
    console.log("String counts:", counts);
}
var stringCount = ["passed", "failed", "passed", "failed", "failed", "test", "Hello", "test", "Orange", "Apple", "Orange"];
printNumberOfStrings(stringCount);
