WeVote.settings = function (params) {


    var askingFeedback = ko.observable(false);

    function changeAskingFeedback() {

    };

    function viewShown() {
        $('#usernamelabel').text("User "+currentUser.getName());
    };

    function logout() {
        currentUser = null;
        WeVote.app.navigate("login",{target: 'current'});
    };

    var viewModel = {

        askingFeedback: askingFeedback,
        changeAskingFeedback: changeAskingFeedback,
        logout: logout,
        viewShown: viewShown

    };
    
    return viewModel;
};