var fullHerstoryShown = false;
var continueReadingText = "Continue reading";

$("#full-herstory").css("height", 0);

$("#continue-reading").click(function () {
  if (fullHerstoryShown) {
    $(document.getElementById("continue-reading")).text(continueReadingText);
    $("#full-herstory").css("height", 0);
    $("#full-herstory").css("overflowY", "hidden");
    fullHerstoryShown = false;
  } else {
    $(document.getElementById("continue-reading")).text("Close");
    $("#full-herstory").css("height", "500px");
    $("#full-herstory").css("overflowY", "scroll");
    fullHerstoryShown = true;
  }
});
