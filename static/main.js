$('#log-out').click(function() {
	$.ajax({
		type: "GET",
		url: '/auth/logout'
	});
	console.log('Clicked');
});
	
$('#reaction-gif').click(function() {
	console.log('Gif button clicked!');
	var tags = $('#search-tags').val();
	var url = 'http://replygif.net/api/gifs?tag=' + tags + '&tag-operator=and&api-key=39YAprx5Yi';
	var response = [{id: '', url: '', file: 'http://replygif.net/i/1536.gif'}];
	console.log(response);

	response.forEach(function(data) {
		var img = $('<img src="' + data.file + '">');
		$('.display').append(img);
		
	});

	$.ajax({
		type: 'GET',
		url: url
	}).done(function(data) {
		// console.log(data.length, data);
		data.forEach(function(image) {
			console.log(image.file);
		})
	});
	
});