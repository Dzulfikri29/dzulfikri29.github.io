$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		// this refers to window
		$("header").addClass("bg-white").addClass("shadow-sm");
		$("header").addClass("py-3").removeClass("py-5");
	} else {
		$("header").removeClass("bg-white").removeClass("shadow-sm");
		$("header").removeClass("py-3").addClass("py-5");
	}
});
