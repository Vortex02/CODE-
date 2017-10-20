$("#button1").click(function() {
  $('.box').toggleClass('box-visible');
});

$("#settingsGear").click(function() {
  $('.settings').toggleClass('show-settings');
  
  if($('.settings').hasClass('show-settings')) {
    var e = document.getElementById("settingsOption");
    e.style.display = "block";
  }
  else {
    var e = document.getElementById("settingsOption");
    e.style.display = "none";
  }
});


window.onclick = function(event) {
  if (!event.target.matches('.settings')) {
    var d = document.getElementsByClassName("settingsOption");
    
    for (i = 0; i < d.length; i++) {
      var di = d[i];
      if (di.style.display != "block";) {
        di.style.display = "block";
      }
    }
  }
}
