$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
});

$(window).load(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
    
    $('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("href");
		scrollToID(sectionID, 300);
	});
});

// scroll function
function scrollToID(id, speed){
	var offSet = parseInt($('#main-navbar').css("height"));
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
}