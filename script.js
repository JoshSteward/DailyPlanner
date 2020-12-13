$(document).ready(function (){

    // get current date from moment
var dateNow = moment().format('dddd, MMMM Do');
$("#currentDay").text(dateNow);
console.log(dateNow); 

//create variables to store and loop through schedule 
var myPlanner = [
    {
        id: "0",
        hour: "9",
        time: "9",
        period: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        period: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        period: "am",
        reminder: ""
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        period: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "1",
        time: "1",
        period: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "2",
        time: "2",
        period: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "3",
        time: "3",
        period: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "4",
        time: "4",
        period: "pm",
        reminder: ""
    },
    {
        id: "9",
        hour: "5",
        time: "5",
        period: "pm",
        reminder: ""
    },
]
//save data to local storage
function saveData(){
    localStorage.setItem("myPlanner", JSON.stringify("myPlanner"));
}
console.log(myPlanner);

//display saved events in local storage 
function  displayEvents() {
    myPlanner.forEach(function(_thisHour){
        $('#${_thisHour.id}').val(_thisHour.reminder);
    })

}

//set any existing data to screen 
function storedData(){
    var storedInfo = JSON.parse(localStorage.getItem("myPlanner"));
    if (storedInfo) {
        myplanner = storedInfo;
    }
    saveData();
    displayEvents();
}

//save data to local storage 
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myPlanner[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveData();
    displayEvents();
})

//create function that changes colour of planner based on if it's past present or future
var plannerTime = function(){
    var currentHour = moment().hour();
    $(".time").each(function(){

        var elementHour = parseInt($(this).attr("id"));

        if (elementHour < currentHour) {
            $( this ).removeClass( "present future" ).addClass( "past" );        }
        else if (elementHour === currentHour) {
            $( this ).removeClass( "past future" ).addClass( "present" );        }
        else {
            $( this ).removeClass( "present past" ).addClass( "future" );        }
    })
};



});