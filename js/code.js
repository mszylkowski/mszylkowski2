$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
});

$(window).load(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
    
    $('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("href");
		scrollToID(sectionID, 750);
	});
});

// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}