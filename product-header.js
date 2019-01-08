	
	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementById("product-header-top");


	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset > 200) {
	  	header.classList.remove("slide");
	  } else {
	    header.classList.add("slide");
	  }
	}
