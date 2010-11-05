$(document).ready(function(){
		
	Typekit.load({
	  active: function() {
			$(window).resize();
			$("#content").hide().removeClass('invisible').fadeIn(2000);
	  }
	});

});


$(window).resize(function() {
	
	$('#content').css({
		position:'absolute',
		top: ($(window).height() - $('#content').outerHeight())/2
	});
	
	$('body').css({
		width: $('#content').outerWidth(true) + 350
	});

});