$("#button1").click(function() {
  $('.box').toggleClass('box-visible');
});

$("#settingsGear").click(function() {
  window.setTimeout(function() {
    var e = document.getElementById("settingsOption");
    if(e.style.display == null || e.style.display == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
  }, 2000)
  $('.settings').toggleClass('show-settings');
});
