$(document).ready(function (){

    // get current date from moment
var dateNow = moment().format('dddd, MMMM Do');
$("#currentDay").text(dateNow);
console.log(dateNow); 

var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();


function setPlanner() {
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var input = localStorage.getItem(id);

        if (input !== null) {
            $(this).children(".input").val(input);
        }
    });
}
setPlanner();

//save data to local storage 
$(".submitBtn").on("click", function(event) {
    //localStorage.setItem("myPlanner", JSON.stringify(myPlanner));
    //event.preventDefault();
    var time = $(this).parent().attr("id");
    var input = $(this).siblings(".input").val();
    console.log(input);

    localStorage.setItem(time, input);
})

//create function that changes colour of planner based on if it's past present or future
var plannerTime = function(){
    var currentHour = moment().hour();
    $(".time-block").each(function(){

        var elementHour = parseInt($(this).attr("id"));

        if (elementHour < currentHour) {
            $( this ).removeClass( "present future" ).addClass( "past" );        }
        else if (elementHour === currentHour) {
            $( this ).removeClass( "past future" ).addClass( "present" );        }
        else {
            $( this ).removeClass( "present past" ).addClass( "future" );        }
    })
};
plannerTime();

console.log(moment().hour());;


});
