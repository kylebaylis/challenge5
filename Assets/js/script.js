// current date for header
var date = String(moment().format("dddd, MMMM Do"));

// for each time block to compare to for coloring
var currentHour = Number(moment()/* to test different times - .subtract(2, "hours")*/.format("H"));

// window.alert(currentHour); - test to see if working

// to add current date to header
$("<p>" + date + "</p>").appendTo("#currentDay");

// to change color based on time
var timeChange = function() {
    if (currentHour < 9) {
        $("#9").attr("id", "future");
        $("#10").attr("id", "future");
        $("#11").attr("id", "future");
        $("#12").attr("id", "future");
        $("#13").attr("id", "future");
        $("#14").attr("id", "future");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour > 17) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "past");
        $("#14").attr("id", "past");
        $("#15").attr("id", "past");
        $("#16").attr("id", "past");
        $("#17").attr("id", "past");
    }
    else if (currentHour === 9) {
        $("#9").attr("id", "present");
        $("#10").attr("id", "future");
        $("#11").attr("id", "future");
        $("#12").attr("id", "future");
        $("#13").attr("id", "future");
        $("#14").attr("id", "future");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 10) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "present");
        $("#11").attr("id", "future");
        $("#12").attr("id", "future");
        $("#13").attr("id", "future");
        $("#14").attr("id", "future");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 11) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "present");
        $("#12").attr("id", "future");
        $("#13").attr("id", "future");
        $("#14").attr("id", "future");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 12) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "present");
        $("#13").attr("id", "future");
        $("#14").attr("id", "future");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 13) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "present");
        $("#14").attr("id", "future");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 14) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "past");
        $("#14").attr("id", "present");
        $("#15").attr("id", "future");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 15) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "past");
        $("#14").attr("id", "past");
        $("#15").attr("id", "present");
        $("#16").attr("id", "future");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 16) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "past");
        $("#14").attr("id", "past");
        $("#15").attr("id", "past");
        $("#16").attr("id", "present");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 16) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "past");
        $("#14").attr("id", "past");
        $("#15").attr("id", "past");
        $("#16").attr("id", "present");
        $("#17").attr("id", "future");
    }
    else if (currentHour === 17) {
        $("#9").attr("id", "past");
        $("#10").attr("id", "past");
        $("#11").attr("id", "past");
        $("#12").attr("id", "past");
        $("#13").attr("id", "past");
        $("#14").attr("id", "past");
        $("#15").attr("id", "past");
        $("#16").attr("id", "past");
        $("#17").attr("id", "present");
    }
}

timeChange();
