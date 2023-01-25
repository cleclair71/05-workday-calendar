
// Grabbing the element with the id of "currentDate" and storing it in the variable displayDay
let displayDay = document.getElementById("currentDate");
// Setting the innerHTML of the displayDay element to the current date and time in the format "day, month date year hour:minute am/pm"
displayDay.innerHTML = dayjs().format("dddd, MMMM D YYYY hh:mm A");
// Storing the current hour in the format of "hh" (hours in a 24 hour format) in the variable displayHour
let displayHour = dayjs().format("H");


$(".saveBtn").click(function (event) {
  // Preventing the default action of the button from happening
  event.preventDefault();
  // Getting the value of the element with the class "time-display" that is a 
  // sibling of the button that was clicked, and storing it in the variable "values"
  var values = $(this).siblings(".description").val();
  // Getting the value of the id of the parent element of the button, splitting it by the "-" character, 
  // and storing the second element (the hour) in the variable "time"
  var time = $(this).parent().attr("id");
  // Setting the value of the local storage item with the key of "time" to the value of "values"

  localStorage.setItem(time, values);
});
function rowColour() {


  $(".time-display").each(function () {
    // Getting the value of the id of the current element, 
    // splitting it by the "-" character, and storing the second element (the hour) in the variable "timeDisplay"
    var timeDisplay = parseInt($(this).attr("id").split("-")[1]);

    // If the current hour equals the hour of the current element, 
    // add the class "present" to the current element and its child element with the class "description"
    if (timeDisplay < displayHour) {
      $(this).addClass("past");
      // $(this).children(".rows").addClass("present");

      // If the current hour is less than the hour of the current element, 
      // remove the class "present" and add the class "future" to the current element
    } else if (timeDisplay === displayHour) {
      $(this).removeClass("past");
      $(this).addClass("present");

      // If the current hour is greater than the hour of the current element, 
      // remove the class "future" and add the class "past" to the current element
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

rowColour();
// the function rowColour will be called every 15 seconds 
var interval = setInterval(rowColour, 15000);
// set the values of text boxes on a page when it is loaded from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$("#clearBtn").click(function (event) {
  // prevents any default action associated with the click event from occurring
  event.preventDefault();
  // sets the value of all textareas on the page to an empty string
  $("textarea").val("");
  // clears all data stored in localStorage for the current page.
  localStorage.clear();

});
