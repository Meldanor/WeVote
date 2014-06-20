var GLOBAL_VARIABLES = {
	isTeacher: ko.observable(false)
};

var isExerciseStarted = false;
var numberOfExerciseTasks = 0;

var navBarDisabled = ko.observable(true);

var usernames = ["kilian", "julien", "haXXor1337"];
var pwds      = ["melanie", "juliane", "qwerty"];

function IsNumeric(input) {
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
};