popupVisible = ko.observable(false);

showVotingPopup = function(){
    WeVote.app.navigate('exercise',{target: 'current'});
};

vote = function(){
    popupVisible(false);
    DevExpress.ui.notify("Voted!", "success", 1000);
};

cancelVote = function(){
    popupVisible(false);
    DevExpress.ui.notify("Vote canceled!", "info", 1000);
};

nowVoted = ko.observable(0);
nowPossible = ko.observable(0);