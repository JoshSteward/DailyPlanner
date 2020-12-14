$(document).ready(function (){

    // get current date from moment
var dateNow = moment().format('dddd, MMMM Do');
$("#currentDay").text(dateNow);
console.log(dateNow); 

//create variables to store and loop through schedule 
var myPlanner = [
    {
        id: "9",
        hour: "9",
        time: "9",
        period: "am",
        reminder: ""
    },
    {
        id: "10",
        hour: "10",
        time: "10",
        period: "am",
        reminder: ""
    },
    {
        id: "11",
        hour: "11",
        time: "11",
        period: "am",
        reminder: ""
    },
    {
        id: "12",
        hour: "12",
        time: "12",
        period: "pm",
        reminder: ""
    },
    {
        id: "13",
        hour: "1",
        time: "13",
        period: "pm",
        reminder: ""
    },
    {
        id: "14",
        hour: "2",
        time: "14",
        period: "pm",
        reminder: ""
    },
    {
        id: "15",
        hour: "3",
        time: "15",
        period: "pm",
        reminder: ""
    },
    {
        id: "16",
        hour: "4",
        time: "16",
        period: "pm",
        reminder: ""
    },
    {
        id: "17",
        hour: "5",
        time: "17",
        period: "pm",
        reminder: ""
    },
]
//save data to local storage
function saveData(){
    localStorage.setItem("myPlanner", JSON.stringify(myPlanner));
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
    var storedInfo = JSON.parse(localStorage.getItem(myPlanner));
    if (storedInfo) {
        myplanner = storedInfo;
    }
    saveData();
    displayEvents();
}

//save data to local storage 
$(".submitBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).parents(".time").children(".future").attr("id");
    myPlanner[saveIndex].reminder = $(this).parents(".time").children(".future").val();
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
plannerTime();

console.log(moment().hour());;


});