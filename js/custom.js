jQuery(function($) {
  
  // Global HTML Elements
  var header = $("<div>").attr("class", "header");
  var banner = $("<div>").attr("class", "banner");
  
  header.html([
	"<div class='container'>",
		"<div class='logo'>",
		    "<a href='/index.html'><img src='images/wt_logo.png' /></a></div>",
			"<div class='navigation'>",
				"<ul>",
					"<li><a href='/index.html'>Home</a></li>",
					"<li>About</li>",
					"<li>Contact</li>",
				"</ul>",
			"</div>",
	    "</div>",
	"</div>"
  ].join(""));
  
  banner.html([
	"<div class='banner'>",
		"<div class='container'>",
			"<h2>Tutorial for your Weebly Site</h2>",
			"<p>Let's level up your Weebly site!</p>",
		"</div>",
	"</div>"
  ].join(""));
  
  $("body").prepend(header, banner);
  
});