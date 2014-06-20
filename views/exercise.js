
// kA, ob man das noch einbaut
/*jQuery(document).on("click", "#votedstudentstable tr td", function(e) {
    console.log($(this).parent());
    alert($(this).parent().children().first().html());
    var col = $(this).css('color');
    console.log(col);
    if (col == 'rgb(255, 0, 0)') {
        col = 'green';
        alert("rot");
    }
    else {
        col = 'red';
        alert("green");
    }
    $(this).css('color', col);
});*/

WeVote.exercise = function (params) {

    var submissions = [];

    function Submission(name, submissionNumbers) {
        this.name = name;
        this.taskArray = new Array(submissionNumbers);
        for (var i = 0 ; i < submissionNumbers; ++i) {
            this.taskArray[i] = false;
        }

        this.submit = function (index) {
            this.taskArray[index] = true;
        };
        this.getName = function () {
            return this.name;
        };
        this.isSubmit = function (index) {
            return this.taskArray[index];
        };
    };

    var tasknumbers = ko.observable();

    function startExercise() {
        if (!IsNumeric(tasknumbers())) {
            alert("HALT!");
            return;
        }
        if (tasknumbers() <= 0) {
            DevExpress.ui.notify("Exercise must have at least one exercise!", 'error', 2000);
            return;
        }
        DevExpress.ui.notify('Exercise startet with ' + tasknumbers() + ' tasks', 'success', 2000);

        numberOfExerciseTasks = tasknumbers();
        isExerciseStarted = true;
        $("#votedstudentstable").toggle(isExerciseStarted);
        prepareVotingTable();
        prepareToVoteTable();
    };

    function prepareVotingTable() {
         var tableHead = $("#votedstudentstable table thead");
         tableHead.html('');
         tableHead.append('<tr>');
         tableHead.append('<th>Name</th>')
         for (var i = 0 ; i < numberOfExerciseTasks; ++i)
            tableHead.append('<th>' + (i + 1) + '</th>');

         tableHead.append('</tr>');
    }

    function prepareToVoteTable() {

        var table = $('#tovotetable tbody');
        table.html(''); // clear table

         var showHelloWorld = function () {
            alert("lol");
        };

        for (var i = 0; i < numberOfExerciseTasks; ++i) {
            table.append('<tr><td>Task ' + ( i + 1 ) +'</td> <td><div id="checkBox' + i + '"></div></td></tr>');

            $('#checkBox'+i).dxCheckBox({
                valueChangeAction: showHelloWorld ,
                height: 50,
                width: 50
            });
        }
    };

    function submit () {
        var name = "Hans";
        console.log(numberOfExerciseTasks);
        var sub = new Submission(name, numberOfExerciseTasks);
        for (var i = 0 ; i < numberOfExerciseTasks; ++i) {
            var checkBox = $('#checkBox'+ i).dxCheckBox("instance");
            var isChecked = checkBox.option('checked');
            if (isChecked) {
                sub.submit(i);
            }
        }
        submissions.push(sub);
        console.log(sub);

        DevExpress.ui.notify('Submited', 'success', 2000);
    };

    function viewShown() {
        $("#teacherview").toggle(GLOBAL_VARIABLES.isTeacher());
        $("#studentview").toggle(!GLOBAL_VARIABLES.isTeacher());

        if (!GLOBAL_VARIABLES.isTeacher()) {

            $("#votedstudentstable").toggle(isExerciseStarted);
            if (isExerciseStarted) {
                var table = $('#votedstudentstable table tbody');
                table.html(''); // clear table
                for (var i = 0 ; i < submissions.length; ++i) {
                    showSubmissionInTable(table, submissions[i]);
                }
            }
        }
    };

    function showSubmissionInTable(table, submission) {
        table.append('<tr>');

        table.append('<td> '+submission.getName()+'</td>');
        for (var i = 0 ; i < 8; ++i) {

            var sign = submission.isSubmit(i) ? 'X' : '-';
            table.append('<td> '+sign+'</td>');
        }

        table.append('</tr>');
    };

    var viewModel = {

        tasknumbers: tasknumbers,

        startExercise: startExercise,

        submit: submit,
        viewShown: viewShown
    };
    return viewModel;
};