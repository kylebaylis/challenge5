// current date for header
var date = String(moment().format("dddd, MMMM Do"));

// for each time block to compare to for coloring
var currentHour = String(moment().format("HH"));

// to add current date to header
$("<p>" + date + "</p>").appendTo("#currentDay");

