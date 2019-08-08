$(window).scroll(function() {
	$('.profile h2').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.profile p').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.contact-info').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});		

$(window).scroll(function() {
	$('#gallery-ul .item').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});	

$(window).scroll(function() {
	$('.page-head').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});	

$(window).scroll(function() {
	$('.resumepage').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated slideInLeft");
		}
	});
});	

$(window).scroll(function() {
	$('.download_resume li').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});	

$(window).scroll(function() {
	$('article').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});	

$(window).scroll(function() {
	$('.contact-form').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInUp");
		}
	});
});	