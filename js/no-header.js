jQuery(function($) {
	
  // Global HTML Head Elements
  var head = $("head").append([
    "<meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>",
	"<meta name='viewport'content='width=device-width, initial-scale=1.0' />",
	"<link rel='stylesheet' href='css/main.css' />"
  ]);
  
  // Global HTML Body Elements
  var header = $("<div>").attr("class", "header");
  var main = $('.mainContainer').wrap('<div class="main"></div>').parent();
  var footer = $("<div>").attr("class", "footer");
  
  // Header
  header.html([
	"<div class='container'>",
		"<div class='logo'>",
		    "<a href='/index.html'><img src='images/wt_logo.png' /></a></div>",
			"<div class='navigation'>",
				"<ul>",
					"<li><a href='/index.html'>Home</a></li>",
					"<li><a href='/about.html'>About</a></li>",
					"<li>Contact</li>",
				"</ul>",
			"</div>",
	    "</div>",
	"</div>"
  ].join(""));
  
  // Footer
  footer.html([
	"<div class='container'>",
		"<p>Copyright 2020</p>",
	"</div>"
  ].join(""));
  
  $("body").prepend(header, main, footer);
  
});