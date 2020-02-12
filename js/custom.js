jQuery(function($) {
  
  // Global HTML Elements
  var header = $("<div>").attr("class", "header");
  var banner = $("<div>").attr("class", "banner");
  var footer = $("<div>").attr("class", "footer");
  
  // Header
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
  
  // Banner
  banner.html([
	"<div class='container'>",
		"<h2>Tutorial for your Weebly Site</h2>",
		"<p>Let's level up your Weebly site!</p>",
	"</div>"
  ].join(""));
  
  // Main
  var main = $('.container').wrapAll('<div class="main"></div>');
  
  // Footer
  footer.html([
	"<div class='container'>",
		"<p>Copyright 2020</p>",
	"</div>"
  ].join(""));
  
  $("body").prepend(header, banner, main, footer);
  
});