$('#log-out').click(function() {
	$.ajax({
		type: "GET",
		url: '/auth/logout'
	});
	console.log('Clicked');
});
	
