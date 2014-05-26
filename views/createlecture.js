raumDescription = "Raum";

time = new Date();

Weekdays = [
	{name: "Monday"},
	{name: "Tuesday"},
	{name: "Wednesday"},
	{name: "Thursday"},
	{name: "Friday"},
	{name: "Saturday"},
	{name: "Sunday"}
];

Turnus = [
	{name: "1 Woche"},
	{name: "2 Wochen"}
];

buttonClicked = function(){
    DevExpress.ui.notify("Lecture created", "success", 1000);
};