$('#log-out').click(function() {
	$.ajax({
		type: "GET",
		url: '/auth/logout'
	});
	console.log('Clicked');
});
	
$('#reaction-gif').click(function() {
	$.ajax({
		type: 'GET',
		url: '/comment'
	});
	console.log('Gif button clicked!')
});