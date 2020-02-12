jQuery(function($) {
  
  // Global HTML Elements
  var header = $("<div>").attr("class", "header");
  
  header.html([
	"<div class='container'>",
		"<div class='logo'><a href='/index.html'><img src='images/wt_logo.png' /></a></div>",
			"<div class='navigation'>",
				"<ul>",
					"<li><a href='/index.html'>Home</a></li>",
					"<li>About</li>",
					"<li>Contact</li>",
				"</ul>",
			"</div>",
	    "</div>",
	"</div>"
  ]);
  
  header.appendTo("body");
  
});