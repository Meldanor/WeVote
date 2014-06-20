var GLOBAL_VARIABLES = {
	isTeacher: ko.observable(false)
};

var isExerciseStarted = false;
var numberOfExerciseTasks = 0;


function IsNumeric(input) {
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
};