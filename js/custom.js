jQuery(function($) {
  
  // Global HTML Elements
  var header = $("<div>").attr("id", "header");
  
  header.html([
    "<div class="cool">",
    "</div>"
  ]);
  
  header.appendTo("body");
  
});