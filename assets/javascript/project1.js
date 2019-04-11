

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
        database.ref().set({
            soda: sodaCount
        });

    });

    $("#sodaSub").on("click", function(){
        console.log("click")
        sodaCount--;
        database.ref().set({
            soda: sodaCount
        });
    });

    database.ref().on("value", function(snapshot){
        console.log(snapshot.val().soda);
        sodaCount = snapshot.val().soda;
        $("#sodaCount").text(snapshot.val().soda)
    })












function apiTM(eventSearch) {
    console.log(eventSearch)
    const apiKey = "apikey=rrFQUi7azSu6BIs8pNUwk9tDZHSTv8YY"
    const apiTM = "https://app.ticketmaster.com/discovery/v2/"
    let query = apiTM + "attractions.json?" + apiKey
    console.log(query);
    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        for (i=10; i < 10; i++) {
            console.log(response[i])
            $("$results").text(response)
        }
    })
};







});