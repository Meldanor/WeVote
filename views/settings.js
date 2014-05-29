WeVote.settings = function (params) {


    var askingFeedback = ko.observable(false);

    var username = ko.observable('');
    var password = ko.observable('');

    function showStatus() {
        DevExpress.ui.notify('Status: '+ askingFeedback(), 'info', 3000);
    }

    var viewModel = {

        popup: {
            visible: ko.observable(false),
            showPopup: function() {
                this.popup.visible(true);
            },
            hidePopup: function() {
                this.popup.visible(false);
                DevExpress.ui.notify('Name: '+ username()+' PW:'+password(), 'success', 3000);
            }
        },

        askingFeedback: askingFeedback,
        showStatus: showStatus,
        username: username,
        password: password


    };
    return viewModel;
};