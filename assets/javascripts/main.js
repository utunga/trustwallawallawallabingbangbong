$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});

var nav = responsiveNav("#nav", {
	customToggle: "#nav-toggle",
	closeOnNavClick: true,
	insert: "before",
	open:function() 
	{
		console.log("open");
	},
	close:function() 
	{
		console.log("close");
	}
});



