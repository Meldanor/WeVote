WeVote.login = function (params) {


    var buttonDisable = ko.observable(true);
    var pw = ko.observable('');
    var uname = ko.observable('');

    var changeField1 = function() {
        if(uname() != "" && pw() != "")
            buttonDisable = viewModel.buttonDisable(false);
        else
            buttonDisable = viewModel.buttonDisable(true);
    };

    var loginButton = function() {
        var isCorrect = false;
        for(var i = 0; i < usernames.length; ++i) {
            if (uname() == usernames[i] && pw() == pwds[i])
                isCorrect = true;
            
        }

        if(isCorrect) {
            isLoggedIn = true;
            WeVote.app.navigate("overview",{target: 'current'});
            DevExpress.ui.notify("Login successfull!", "success", 1000);
        }
        else
            DevExpress.ui.notify("Username or password incorrect!", "error", 1000);
    };

    var regButton = function() {
        WeVote.app.navigate("registry");
    };

    var viewModel = {
        buttonDisable: buttonDisable,
        pw : pw,
        uname : uname,
        changeField1 : changeField1,
        loginButton : loginButton,
        regButton : regButton
    };
    return viewModel;
};