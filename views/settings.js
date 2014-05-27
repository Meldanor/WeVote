var askingFeedback = ko.observable(false);

popupTitle = "My popup";
buttonVisible = ko.observable(true);
popupVisible = ko.observable(false);
showPopup = function () {
  popupVisible(true);
};
hidePopup = function () {
  popupVisible(false);
};