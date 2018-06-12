// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Too late :)";
    document.getElementById("detail").innerHTML = "Merry Christmas!";
  } else if (distance / (1000 * 60 * 60 * 24) > 60){
    document.getElementById("detail").innerHTML = "Way too early for Christmas music!";
  } else if (distance / (1000 * 60 * 60 * 24) > 30){
    document.getElementById("detail").innerHTML = "How are the Black Friday deals this year?";
  } else if (distance / (1000 * 60 * 60 * 24) > 10){
    document.getElementById("detail").innerHTML = "Don't forget the wrapping paper!";
  } else if (distance / (1000 * 60 * 60 * 24) > 2){
    document.getElementById("detail").innerHTML = "Hope you've got Amazon Prime!";
  } else {
    document.getElementById("detail").innerHTML = "Challenge accepted";
  }
}, 1000);
