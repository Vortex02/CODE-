$("#button1").click(function() {
  $('.box').toggleClass('box-visible');
});

$("#settingsGear").click(function() {
  var d = document.getElementById("settingsGear");
  
  if(d.style.display == "none") {
    window.setTimeout(function() {
    var e = document.getElementById("settingsOption");
    e.style.display = "block";
  }, 2000)
  }
  else {
    var e = document.getElementById("settingsOption");
    e.style.display = "none";
  }
  $('.settings').toggleClass('show-settings');
});
