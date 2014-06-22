   WeVote.registry = function (params) {

 
    var buttonDisable = ko.observable(true);
    var sname = ko.observable('');
    var surname = ko.observable('');
    var studID = ko.observable('');
    var pw = ko.observable('');
    var pw2 = ko.observable('');
    var username = ko.observable('');

    var changeField = function()
    {
        if(viewModel.sname() != "" && viewModel.surname() != "" && viewModel.studID() != "" && viewModel.pw() != "" &&
            viewModel.pw2() != "" && viewModel.username() != "")
        {
            viewModel.buttonDisable(false);
        }
        else
            viewModel.buttonDisable(true);
    }

    var finishReg = function()
    {
        if(viewModel.pw() != viewModel.pw2())
        {
            viewModel.pw('');
            viewModel.pw2('');
            DevExpress.ui.notify("Passwords don't match. Try again!", "error", 1000);
        }
        else
        {
            DevExpress.ui.notify("Registration successful!", "success", 1000);
            usernames.push(viewModel.username());
            pwds.push(viewModel.pw());
            currentUser = new User(viewModel.username());
            WeVote.app.navigate("login");
        } 
 
    }

    var viewModel = {
      
      finishReg : finishReg,
      changeField : changeField,
      buttonDisable : buttonDisable,
      sname : sname,
      surname : surname,
      username : username,
      studID : studID,
      pw : pw,
      pw2 : pw2

    };
    return viewModel;
};