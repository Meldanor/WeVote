popupVisible = ko.observable(false);

showVotingPopup = function(){
    popupVisible(true);
};

vote = function(){
    popupVisible(false);
    DevExpress.ui.notify("Voted!", "success", 1000);
};

cancelVote = function(){
    popupVisible(false);
    DevExpress.ui.notify("Vote canceled!", "info", 1000);
};

nowVoted = 0;
nowPossible = 0;