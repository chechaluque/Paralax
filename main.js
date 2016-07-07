$(document).ready(function () {
	$(window).scroll(function () {
		 var bar = $(window).scrollTop();
		 var position = bar * 0.20;

		 $('body').css({
		 	'background-position':'0 -' + position + 'px'
		 });
	});
});