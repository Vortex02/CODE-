$("#button1").click(function() {
  $('.box').toggleClass('box-visible');
});

$("#settingsGear").click(function() {
  $('.settings').toggleClass('show-settings');
  
  if($('.settings').hasClass('show-settings')) {
    window.setTimeout(function() {
    var e = document.getElementById("settingsOption");
    e.style.display = "block";
  }, 100)
  }
  else {
    var e = document.getElementById("settingsOption");
    e.style.display = "none";
  }
});
