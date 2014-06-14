WeVote.exercise = function (params) {

    var tasknumbers = ko.observable(false);

    var checkedTask1 = ko.observable(false);
    var checkedTask2 = ko.observable(false);
    var checkedTask3 = ko.observable(false);

    function startExercise() {
        DevExpress.ui.notify('Exercise startet with ' + tasknumbers() + ' tasks', 'success', 2000);
    };

    function submit () {
        DevExpress.ui.notify('Submited', 'success', 2000);
        
    };

    function viewShown() {
        $("#teacherview").toggle(GLOBAL_VARIABLES.isTeacher());
        $("#studentview").toggle(!GLOBAL_VARIABLES.isTeacher());
    }

    var viewModel = {

        tasknumbers: tasknumbers,
        checkedTask1: checkedTask1,
        checkedTask2: checkedTask2,
        checkedTask3: checkedTask3,

        startExercise: startExercise,
        submit: submit,
        viewShown: viewShown

    };
    return viewModel;
};