WeVote.settings = function (params) {


    var askingFeedback = ko.observable(false);

    var username = ko.observable('');
    var password = ko.observable('');

    function changeAskingFeedback() {
        DevExpress.ui.notify('Asking for Feedback Enabled: '+ askingFeedback(), 'info', 1000);
    };

    var viewModel = {

        popup: {
            visible: ko.observable(false),
            showPopup: function() {
                this.popup.visible(true);
            },
            hidePopup: function() {
                this.popup.visible(false);
                DevExpress.ui.notify('Name: '+ username()+' PW: '+password(), 'success', 1000);
            }
        },

        askingFeedback: askingFeedback,
        changeAskingFeedback: changeAskingFeedback,
        username: username,
        password: password

    };
    return viewModel;
};