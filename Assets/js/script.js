// current date for header
var date = String(moment().format("dddd, MMMM Do"));

// for each time block to compare to for coloring
var currentHour = Number(moment().format("H"));/* to test different times - .subtract(2, "hours")*/

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

// to run color changing
timeChange();

// to save text for each time block to local storage
var savedTask9 = $("#textArea9").val();
var savedTask10 = $("#textArea10").val();
var savedTask11 = $("#textArea11").val();
var savedTask12 = $("#textArea12").val();
var savedTask13 = $("#textArea13").val();
var savedTask14 = $("#textArea14").val();
var savedTask15 = $("#textArea15").val();
var savedTask16 = $("#textArea16").val();
var savedTask17 = $("#textArea17").val();

// saves on click of save button, turns it into string, stores as time slot value
$(document).ready(function(){
    $("#saveBtn9").click(function(){
        var savedTask9 = $("#textArea9").val();
        var stringTask9 = JSON.stringify(savedTask9);
        localStorage.setItem("9 AM", stringTask9);
    });
});

$(document).ready(function(){
    $("#saveBtn10").click(function(){
        var savedTask10 = $("#textArea10").val();
        var stringTask10 = JSON.stringify(savedTask10);
        localStorage.setItem("10 AM", stringTask10);
    });
});

$(document).ready(function(){
    $("#saveBtn11").click(function(){
        var savedTask11 = $("#textArea11").val();
        var stringTask11 = JSON.stringify(savedTask11);
        localStorage.setItem("11 AM", stringTask11);
    });
});

$(document).ready(function(){
    $("#saveBtn12").click(function(){
        var savedTask12 = $("#textArea12").val();
        var stringTask12 = JSON.stringify(savedTask12);
        localStorage.setItem("12 PM", stringTask12);
    });
});

$(document).ready(function(){
    $("#saveBtn13").click(function(){
        var savedTask13 = $("#textArea13").val();
        var stringTask13 = JSON.stringify(savedTask13);
        localStorage.setItem("1 PM", stringTask13);
    });
});

$(document).ready(function(){
    $("#saveBtn14").click(function(){
        var savedTask14 = $("#textArea14").val();
        var stringTask14 = JSON.stringify(savedTask14);
        localStorage.setItem("2 PM", stringTask14);
    });
});

$(document).ready(function(){
    $("#saveBtn15").click(function(){
        var savedTask15 = $("#textArea15").val();
        var stringTask15 = JSON.stringify(savedTask15);
        localStorage.setItem("3 PM", stringTask15);
    });
});

$(document).ready(function(){
    $("#saveBtn16").click(function(){
        var savedTask16 = $("#textArea16").val();
        var stringTask16 = JSON.stringify(savedTask16);
        localStorage.setItem("4 PM", stringTask16);
    });
});

$(document).ready(function(){
    $("#saveBtn17").click(function(){
        var savedTask17 = $("#textArea17").val();
        var stringTask17 = JSON.stringify(savedTask17);
        localStorage.setItem("5 PM", stringTask17);
    });
});

// to pull from local storage and place into text area
var saved9 = localStorage.getItem("9 AM");
var quote9 = saved9.replace(/["]+/g, '');
$("#textArea9").append(quote9);

var saved10 = localStorage.getItem("10 AM");
var quote10 = saved10.replace(/["]+/g, '');
$("#textArea10").append(quote10);

var saved11 = localStorage.getItem("11 AM");
var quote11 = saved11.replace(/["]+/g, '');
$("#textArea11").append(quote11);

var saved12 = localStorage.getItem("12 PM");
var quote12 = saved12.replace(/["]+/g, '');
$("#textArea12").append(quote12);

var saved13 = localStorage.getItem("1 PM");
var quote13 = saved13.replace(/["]+/g, '');
$("#textArea13").append(quote13);

var saved14 = localStorage.getItem("2 PM");
var quote14 = saved14.replace(/["]+/g, '');
$("#textArea14").append(quote14);

var saved15 = localStorage.getItem("3 PM");
var quote15 = saved15.replace(/["]+/g, '');
$("#textArea15").append(quote15);

var saved16 = localStorage.getItem("4 PM");
var quote16 = saved16.replace(/["]+/g, '');
$("#textArea16").append(quote16);

var saved17 = localStorage.getItem("5 PM");
var quote17 = saved17.replace(/["]+/g, '');
$("#textArea17").append(quote17);