function calculateTime() {
  var seconds = document.getElementById("seconds").value;
  //   console.log("Total seconds:" + seconds);
  var hours = Math.floor(seconds / 3600);
  document.getElementById("hours").innerHTML = "hours:"+hours;
  var minutes = Math.floor((seconds % 3600) / 60);
  document.getElementById("minutes").innerHTML = "minutes:"+minutes;
  var remainingSeconds = seconds % 60;
  document.getElementById("remaningseconds").innerHTML = "remainingSeconds:"+remainingSeconds;
  //   console.log("Hours:" + hours);
  //   console.log("Minutes:" + minutes);
  //   console.log("Seconds:" + remainingSeconds);
}
