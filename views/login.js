WeVote.login = function (params) {

    //var askingFeedback = ko.observable(false);

    //var username = ko.observable('');
    //var password = ko.observable('');

   /* function changeAskingFeedback() {
        DevExpress.ui.notify('Asking for Feedback Enabled: '+ askingFeedback(), 'info', 1000);
    };*/

    var viewModel = {
/*
        length: 10,
        lengthDescription: "10 char max",
        passMode: passMode "password",
        secretDescription: "type a password"*/

    };
    return viewModel;
};

/*
length = 10;
lengthDescription = "10 characters maximum";
 
passMode = "password";
secretDescription = "type a password";
 
readonly = true;
readonlyDescription = "read-only text box";
*/

buttonClicked1 = function(){
    DevExpress.ui.notify("Login button pressed", "success", 1000);
};

buttonClicked2 = function(){
    DevExpress.ui.notify("Register button pressed", "success", 1000);
};