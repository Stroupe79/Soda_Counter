

$(document).ready(function () {

     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAf7Gqawi-3CiJXNcq-nB1C_JE3QYJ15sU",
    authDomain: "soda-counter.firebaseapp.com",
    databaseURL: "https://soda-counter.firebaseio.com",
    projectId: "soda-counter",
    storageBucket: "soda-counter.appspot.com",
    messagingSenderId: "120662569061"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var sodaCount = 0;

    $("#sodaAdd").on("click", function(){
        console.log("click")
        sodaCount++;
        let time = moment().format("hh:mm");
        let date = moment().format("MM/DD/YYYY");
        $("#showMe").html("<img src='../assets/soda.gif'/>")
        database.ref().set({
            soda: sodaCount,
            time: time,
            date: date
        });
        $("#time").text(time);
        addCan();
    });

    $("#sodaSub").on("click", function(){
        console.log("click")
        sodaCount--;
        database.ref().set({
            soda: sodaCount
        });
        $("#showMe").html("<img src='../assets/noSoda.gif'/>")
        $("#canCount").remove("<img src='./assets/colaCan.jpg' style='height:64px' />")

    });

    $("#sodaReset").on("click", function(){
        console.log("click")
        sodaCount--;
        database.ref().set({
            soda: 0,
            time: ""
        });
        $("#showMe").html("");
        $("#canCount").html("");
    });


    database.ref().on("value", function(snapshot){
        console.log(snapshot.val().soda);
        sodaCount = snapshot.val().soda;
        $("#sodaCount").text(snapshot.val().soda);
        $("#time").text(snapshot.val().time);
    })

function addCan(){
    if(sodaCount === 12){
        $("#canCount").empty();
        $("#canCount").append("<img src='./assets/12pack.jpg' style='height:64px' />") 
    }else{
    $("#canCount").append("<img src='./assets/colaCan.jpg' style='height:64px' />")
    }
}











});