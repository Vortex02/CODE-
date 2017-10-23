function showButtonClick() {
  $('.box').toggleClass('box-visible');
});

function settingsGearClick() {
  $('.settings').toggleClass('show-settings');
  
  if($('.settings').hasClass('show-settings')) {
    window.setTimeout(function() {
      var e = document.getElementById("settingsOption");
      e.style.display = "block";
    }, 1000)
  }
}


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
