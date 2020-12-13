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
console.log(saveData);

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








//load previous data saved locally 
$(function(){
    loadData();

    function loadData(){

    }

});

//save data locally when button is pressed 
$("#submit").on("click", function(){
    

})
var n=$("inputArea").val();

});