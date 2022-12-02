$( "#button-container" ).click(function() {
  $( "#rightSide" ).animate({
    opacity: 1,
    visibility: "visible",
  }, function() {
    // Animation complete.
  });
});