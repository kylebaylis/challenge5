var date = String(moment().format("dddd, MMMM Do"));

$("<p>" + date + "</p>").appendTo("#currentDay");